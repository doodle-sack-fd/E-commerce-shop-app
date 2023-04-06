import { FC, useEffect, useRef } from 'react';
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
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const jsonOrder = JSON.stringify(orderData);
      localStorage.setItem('orderData', jsonOrder);
      const jsonUser = JSON.stringify(userData);
      localStorage.setItem('userData', jsonUser);
    }
    isMounted.current = true;
  }, [orderData, userData]);

  return (
    <div className="CartBlock">
      <div className="CartBlock__container">
        <p>Basket of goods</p>
        <ul className="CartBlock__list">
          {cartProducts.map((item, idx) => (
            <CartItem key={idx} {...item} />
          ))}
          <ShippingForm />
        </ul>
        <div>
          {orderData.map((item, id) => (
            <div>
              <div>заказ номер: {id}</div>
              {item.map((i, idx) => (
                <>
                  <p>{i.title}</p>
                </>
              ))}
            </div>
          ))}

          <p>{orderData.length}</p>
        </div>

        <div>Total price - {totalPrice}</div>
        <div></div>
        <div>
          {userData.map((i, id) => (
            <p>{i.email}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
