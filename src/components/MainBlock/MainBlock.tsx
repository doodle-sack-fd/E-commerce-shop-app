import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { useAppDispatch } from '../../redux/store';
import { selectProductsAll } from '../../redux/slices/products/productSlice';
import ItemBlock from '../ItemBlock/ItemBlock';
import styles from './MainBlock.module.scss';
import Error from '../../pages/Error';
import { SelectFilterAll } from '../../redux/slices/Filters/FilterSlice';

const MainBlock: FC = () => {
  const { products, status } = useSelector(selectProductsAll);
  const { searchQuery } = useSelector(SelectFilterAll);

  const dispatch = useAppDispatch();

  const product = products
    .filter((item) => {
      return searchQuery.toLowerCase() === ''
        ? item
        : item.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .map((item) => <ItemBlock key={item.id} {...item} />);

  useEffect(() => {
    const getItems = async () => {
      dispatch(fetchProducts());
    };
    getItems();
  }, [searchQuery]);

  return (
    <div className={styles.MainBlock}>
      <div className={styles.MainBlock__container}>
        <div>
          {status === 'error' ? (
            <Error />
          ) : (
            <ul className={styles.MainBlock__list}>
              {status === 'loading' ? <div>Загрузка...</div> : product}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
