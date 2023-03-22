import { FC } from 'react';
import { IProductsItem } from '../../redux/slices/products/productSlice';
import styles from './ItemBlock.module.scss';

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProductsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: any;
}

const ItemBlock: FC<IProductsItem> = ({ ...item }) => {
  console.log(item.title);
  return (
    <div className={styles.itemBlock}>
      <div className={styles.itemBlock__container}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default ItemBlock;
