import { FC } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/CartItem';
import ShippingForm from '../components/ShippingForm/ShippingForm';
import { SelectAllCart } from '../redux/slices/Cart/CartSlice';

const Cart: FC = () => {
  const {
    cartProducts,
    totalPrice,
    order: { orderData, userData },
  } = useSelector(SelectAllCart);

  return (
    <div className="CartBlock">
      <div className="CartBlock__container">
        <p>Basket of goods</p>
        <ul className="CartBlock__list">
          {cartProducts.map((item, idx) => (
            <CartItem {...item} />
          ))}
          <ShippingForm />
        </ul>
        <div>
          {orderData.map((item, id) => (
            <li>
              <div>заказ номер: {id}</div>
              {item.map((i, idx) => (
                <>
                  <li>{i.title}</li>
                </>
              ))}
            </li>
          ))}

          <p>{orderData.length}</p>
        </div>

        <div>Total price - {totalPrice}</div>
        <div></div>
        <div>
          {userData.map((i) => (
            <p>{i.email}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
