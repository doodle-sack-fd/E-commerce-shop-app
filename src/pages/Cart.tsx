import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShippingForm from '../components/ShippingForm/ShippingForm';
import { minusProduct, removeProduct, SelectAllCart } from '../redux/slices/Cart/CartSlice';

const Cart: FC = () => {
  const dispatch = useDispatch();

  const { cartProducts, totalPrice } = useSelector(SelectAllCart);

  const removeHandler = (item: number) => {
    dispatch(removeProduct(item));
  };

  const minus = (id) => {
    dispatch(minusProduct(id));
  };

  return (
    <div className="CartBlock">
      <div className="CartBlock__container">
        <p>Basket of goods</p>
        <ul className="CartBlock__list">
          {cartProducts.map((item, idx) => (
            <li key={idx} className="CartBlock__item">
              <div>
                <img src={item.image} width="100" height="100" alt="goods" />
              </div>
              <div className="CartBlock__desc">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.quantity}</p>
              </div>
              <button onClick={() => removeHandler(item.id)}>Удалить товар</button>
              <button onClick={() => minus(item.id)}>-1</button>
            </li>
          ))}
        </ul>

        <div>Total price - {totalPrice}</div>

        <div>
          <ShippingForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;
