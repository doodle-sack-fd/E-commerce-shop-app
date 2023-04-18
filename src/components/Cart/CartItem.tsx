import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  ICartSlice,
  addProductToCart,
  minusProduct,
  removeProduct,
} from '../../redux/slices/Cart/CartSlice';

const CartItem: FC<ICartSlice> = ({ id, image, title, description, quantity }) => {
  const dispatch = useDispatch();

  const removeHandler = (item: number) => {
    dispatch(removeProduct(item));
  };

  const onClickMinus = () => {
    dispatch(minusProduct(id));
  };

  const onClickPlus = () => {
    dispatch(
      addProductToCart({
        id,
      } as ICartSlice),
    );
  };

  return (
    <li key={id} className="CartBlock__item">
      <div className="CartBlock__img">
        <img src={image} width="100" height="100" alt="goods" />
      </div>
      <div style={{ width: '100%' }} className="CartBlock__desc">
        <p>{title}</p>
        <p>{description.slice(0, 100) + '...'}</p>
        <p>{quantity}</p>
      </div>
      <button className="CartBlock__change" onClick={() => removeHandler(id)}>
        Удалить товар
      </button>
      <button className="CartBlock__change" onClick={onClickMinus}>
        -1
      </button>
      <button className="CartBlock__change" onClick={onClickPlus}>
        +1
      </button>
    </li>
  );
};

export default CartItem;
