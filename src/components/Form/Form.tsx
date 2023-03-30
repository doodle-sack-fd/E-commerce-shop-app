import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { IOption, IShippingFields } from './Form.interface';

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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm<IShippingFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: 'Name is required field!',
          })}
          placeholder="Name"
          type="text"
        />
        {errors?.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}

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
          <button>send</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            setValue('name', 'Max');
            setValue('email', 'test@test.ru');
          }}>
          Fill data
        </button>
      </div>
    </div>
  );
};

export default Form;
