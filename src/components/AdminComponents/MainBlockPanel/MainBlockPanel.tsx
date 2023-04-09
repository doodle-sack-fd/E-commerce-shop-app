import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SelectAllCart } from '../../../redux/slices/Cart/CartSlice';
import Block from '../Blocks/Block';
import styles from './MainBlockPanel.module.scss';

const MainBlockPanel: FC = () => {
  const {
    totalPrice,
    order: { orderData },
  } = useSelector(SelectAllCart);
  return (
    <div className={styles.mainBlockPanel}>
      <ul className={styles.mainBlockPanel__container}>
        <Block orderCount={orderData}>Кол-во заказов:</Block>
        <Block totalPrice={totalPrice}>На сумму:</Block>
      </ul>
    </div>
  );
};

export default MainBlockPanel;
