import { FC } from 'react';
import { IProductsItem } from '../../redux/slices/products/productSlice';
import styles from './ItemBlock.module.scss';

import { FcRating } from 'react-icons/fc';
import { FiDollarSign } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartButton from '../UI/button/CartButton';

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

const ItemBlock: FC<IProductsItem> = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <li className={styles.itemBlock}>
      <img className={styles.itemBlock__img} src={image} alt="Product" width={120} />
      <p className={styles.itemBlock__title}>{title}</p>
      <p className={styles.itemBlock__rating}>
        {rating.rate} <FcRating />
      </p>
      <p className={styles.itemBlock__price}>
        {price} <FiDollarSign />
      </p>
      <div className={styles.itemBlock__cartContainer}>
        <CartButton>add to cart</CartButton>
      </div>
    </li>
  );
};

export default ItemBlock;
