import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './FullCard.module.scss';
import CartButton from '../UI/button/CartButton';
import { addProductToCart } from '../../redux/slices/Cart/CartSlice';
import { useDispatch } from 'react-redux';

const FullCard: FC = () => {
  const [products, setProducts] = useState<{
    image: string;
    title: string;
    price: string;
  }>();

  const { id } = useParams();
  const API_URL_ID = 'https://fakestoreapi.com/products/';

  useEffect(() => {
    async function fetchDataProductsId() {
      try {
        const { data } = await axios.get(API_URL_ID + id);
        console.log(data);
        setProducts(data);
        console.log(products);
      } catch (error) {
        alert('Ошибка получения данных о товаре');
      }
    }

    fetchDataProductsId();
  }, []);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addProductToCart(item));
  };

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.FullCard}>
      <div className={styles.FullCard__imageBg}>
        <img className={styles.FullCard__image} src={products.image} alt="" />
      </div>
      <div className={styles.FullCard__description}>
        <p>{products.title}</p>
        <p>{products.price}$</p>
        <CartButton onClick={() => addToCart(products)}>add to cart</CartButton>{' '}
      </div>
    </div>
  );
};

export default FullCard;
