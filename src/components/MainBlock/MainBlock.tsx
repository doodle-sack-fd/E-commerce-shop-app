import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Error from '../../pages/Error';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { SelectFilterCategory, SelectFilterSearch } from '../../redux/slices/Filters/FilterSlice';
import { IProductsItem, selectProductsAll, setIsLiked, StatusKey } from '../../redux/slices/products/productSlice';
import { useAppDispatch } from '../../redux/store';
import ItemBlock from '../ItemBlock/ItemBlock';
import styles from './MainBlock.module.scss';

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

// Cat doesn't like kisses :(

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
