import { FC, useState } from 'react';
import {
  IProductsItem,
  removeLiked,
  SelectIsLiked,
  selectProductsAll,
  setIsLiked,
} from '../../redux/slices/products/productSlice';
import styles from './ItemBlock.module.scss';

import { FcRating } from 'react-icons/fc';
import { FiDollarSign } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addProductToCart, ICartSlice } from '../../redux/slices/Cart/CartSlice';
import CartButton from '../UI/button/CartButton';

import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { SelectFilterSearch } from '../../redux/slices/Filters/FilterSlice';
import { Link } from 'react-router-dom';

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

const ItemBlock: FC = () => {
  const dispatch = useDispatch();
  const isLiked = useSelector(SelectIsLiked);

  const addToCart = (item: ICartSlice) => {
    dispatch(addProductToCart(item));
  };

  const isLike = (item: IProductsItem) => {
    isLiked.some((elem) => elem.id === item.id)
      ? dispatch(removeLiked(item))
      : dispatch(setIsLiked(item));
  };

  const { products } = useSelector(selectProductsAll);
  const searchQuery = useSelector(SelectFilterSearch);

  const product = products.filter((item) => {
    return searchQuery.toLowerCase() === ''
      ? item
      : item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      {product.map((item, id) => (
        <li key={id} className={styles.itemBlock}>
          <div className={styles.itemBlock__liked}>
            <AiOutlineHeart onClick={() => isLike(item)} />
          </div>
          <Link to={`/product/${item.id}`}>
            <div>
              <img className={styles.itemBlock__img} src={item.image} alt="Product" width={120} />
            </div>
            <p className={styles.itemBlock__title}>{item.title}</p>
          </Link>
          <p className={styles.itemBlock__rating}>
            <>{item.rating.rate}</> <FcRating />
          </p>
          <p className={styles.itemBlock__price}>
            {item.price} <FiDollarSign />
          </p>
          <div className={styles.itemBlock__cartContainer}>
            <CartButton onClick={() => addToCart(item)}>add to cart</CartButton>
          </div>
        </li>
      ))}
    </>
  );
};

export default ItemBlock;
