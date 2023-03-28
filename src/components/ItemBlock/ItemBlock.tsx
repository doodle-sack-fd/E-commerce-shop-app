import { FC } from 'react';
import {
  IProductsItem, SelectIsLiked,
  setIsLiked
} from '../../redux/slices/products/productSlice';
import styles from './ItemBlock.module.scss';

import { FcRating } from 'react-icons/fc';
import { FiDollarSign } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addProductToCart, ICartSlice } from '../../redux/slices/Cart/CartSlice';
import CartButton from '../UI/button/CartButton';

import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const isLiked = useSelector(SelectIsLiked);

  const addToCart = () => {
    const item: ICartSlice = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addProductToCart(item));
  };

  const ToggleLike = () => {
    const item: IProductsItem = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
      dispatch(setIsLiked(item))
   
  };

  return (
    <li className={styles.itemBlock}>
      <div className={styles.itemBlock__liked}>
        <AiOutlineHeart onClick={ToggleLike} />
      </div>
      <div>
        <img className={styles.itemBlock__img} src={image} alt="Product" width={120} />
      </div>
      <p className={styles.itemBlock__title}>{title}</p>
      <p className={styles.itemBlock__rating}>
        {rating.rate} <FcRating />
      </p>
      <p className={styles.itemBlock__price}>
        {price} <FiDollarSign />
      </p>
      <div className={styles.itemBlock__cartContainer}>
        <CartButton onClick={addToCart}>add to cart</CartButton>
      </div>
    </li>
  );
};

export default ItemBlock;
