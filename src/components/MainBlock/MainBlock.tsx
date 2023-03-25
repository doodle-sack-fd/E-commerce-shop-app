import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { useAppDispatch } from '../../redux/store';
import { selectProductsAll, StatusKey } from '../../redux/slices/products/productSlice';
import ItemBlock from '../ItemBlock/ItemBlock';
import styles from './MainBlock.module.scss';
import Error from '../../pages/Error';
import { SelectFilterCategory, SelectFilterSearch } from '../../redux/slices/Filters/FilterSlice';

const MainBlock: FC = () => {
  const { products, status } = useSelector(selectProductsAll);
  const searchQuery = useSelector(SelectFilterSearch);
  const categoryId = useSelector(SelectFilterCategory);

  const dispatch = useAppDispatch();

  const product = products
    .filter((item) => {
      return searchQuery.toLowerCase() === ''
        ? item
        : item.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .map((item) => <ItemBlock key={item.id} {...item} />);

  useEffect(() => {
    const category = categoryId !== 'all' ? `/category/${categoryId}` : '';
    const getItems = async () => {
      dispatch(fetchProducts({ category }));
    };
    getItems();
  }, [dispatch, categoryId]);

  return (
    <div className={styles.MainBlock}>
      <div className={styles.MainBlock__container}>
        <div>
          {status === StatusKey.ERROR ? (
            <Error />
          ) : (
            <ul className={styles.MainBlock__list}>
              {status === StatusKey.LOADING ? <div>Загрузка...</div> : product}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
