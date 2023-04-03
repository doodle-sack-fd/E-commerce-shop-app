import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ICartSlice, minusProduct, removeProduct } from '../../redux/slices/Cart/CartSlice';

const CartItem: FC<ICartSlice> = ({ id, image, title, description, quantity }) => {
  const dispatch = useDispatch();

  const removeHandler = (item: number) => {
    dispatch(removeProduct(item));
  };

  const minus = (id: number) => {
    dispatch(minusProduct(id));
  };

  return (
    <li key={id} className="CartBlock__item">
      <div>
        <img src={image} width="100" height="100" alt="goods" />
      </div>
      <div className="CartBlock__desc">
        <p>{title}</p>
        <p>{description}</p>
        <p>{quantity}</p>
      </div>
      <button onClick={() => removeHandler(id)}>Удалить товар</button>
      <button onClick={() => minus(id)}>-1</button>
    </li>
  );
};

export default CartItem;
