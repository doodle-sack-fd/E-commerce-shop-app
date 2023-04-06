import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Error from '../../pages/Error';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { SelectFilterCategory } from '../../redux/slices/Filters/FilterSlice';
import { selectProductsAll, StatusKey } from '../../redux/slices/products/productSlice';
import { useAppDispatch } from '../../redux/store';
import ItemBlock from '../ItemBlock/ItemBlock';
import styles from './MainBlock.module.scss';

const MainBlock: FC = () => {
  const { status } = useSelector(selectProductsAll);
  const categoryId = useSelector(SelectFilterCategory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const category = categoryId !== 'all' ? `/category/${categoryId}` : '';
    const getItems = async () => {
      dispatch(fetchProducts({ category }));
    };
    getItems();
  }, [dispatch, categoryId]);

  return (
    <main className={styles.MainBlock}>
      <div className={styles.MainBlock__container}>
        <div>
          {status === StatusKey.ERROR ? (
            <Error />
          ) : (
            <ul className={styles.MainBlock__list}>
              {status === StatusKey.LOADING ? <div>Загрузка...</div> : <ItemBlock />}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainBlock;
