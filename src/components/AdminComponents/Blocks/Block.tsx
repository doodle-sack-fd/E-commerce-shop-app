import { FC } from 'react';
import styles from './Block.module.scss';
interface BlockProps {
  children: string;
  totalPrice?: number;
  orderCount?: any[]; // Временная цифра, не является суммой всех заказов
}

const Block: FC<BlockProps> = ({ children, totalPrice, orderCount }) => {
  return (
    <li className={styles.blockOrders}>
      <p className={styles.blockOrders__title}>{children}</p>
      <p className={styles.blockOrders__count}>{orderCount ? orderCount.length : totalPrice}</p>
    </li>
  );
};

export default Block;
