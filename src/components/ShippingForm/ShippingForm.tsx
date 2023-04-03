import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import { SelectCartAddProduct, addOrder, addUserData } from '../../redux/slices/Cart/CartSlice';
import { IOption, IShippingFields } from '../Form/Form.interface';

const options: IOption[] = [
  {
    value: 'russia',
    label: 'Russia',
  },
  {
    value: 'china',
    label: 'China',
  },
  {
    value: 'usa',
    label: 'USA',
  },
  {
    value: 'new-zeeland',
    label: 'New zeeland',
  },
];

const getValue = (value: string) => (value ? options.find((option) => option.value === value) : '');

const ShippingForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IShippingFields>({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const cartProducts = useSelector(SelectCartAddProduct);
  
  const onSubmit: SubmitHandler<IShippingFields> = (data, item) => {
    dispatch(addOrder(cartProducts));
    dispatch(addUserData(data));
    reset();
  };
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: 12,
      }}>
      <h1>Enter your shipping info</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '66%', margin: '0 auto' }}>
        <div>
          <input
            {...register('email', {
              required: 'Email is required field!',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter valid email!',
              },
            })}
            placeholder="Email"
            type="email"
          />
          {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}

          <input
            {...register('name', {
              required: 'Name is required field!',
            })}
            placeholder="Name"
            type="text"
          />
          {errors?.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
        </div>

        <Controller
          control={control}
          name="address.country"
          rules={{
            required: 'Country is required!',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect
                placeholder="Countries"
                options={options}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as IOption).value)}
              />
              {error && <div style={{ color: 'red' }}>{error.message}</div>}
            </div>
          )}
        />
        <div>
          <input
            {...register('address.city', {
              required: 'City is required field!',
            })}
            placeholder="City"
          />
          {errors?.address?.city && (
            <div style={{ color: 'red' }}>{errors.address.city.message}</div>
          )}
        </div>

        <div>
          <input
            {...register('address.street', {
              required: 'Street is required field!',
            })}
            placeholder="Street"
          />
          {errors?.address?.street && (
            <div style={{ color: 'red' }}>{errors.address.street.message}</div>
          )}
        </div>
        <div>
          <input
            {...register('address.house', {
              required: 'House is required field!',
            })}
            placeholder="House"
          />
          {errors?.address?.house && (
            <div style={{ color: 'red' }}>{errors.address.house.message}</div>
          )}
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ShippingForm;
