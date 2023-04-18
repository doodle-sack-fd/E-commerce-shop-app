import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { SelectFilterCategory, setCategoryId } from '../../redux/slices/Filters/FilterSlice';
import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';

const Categories: FC = () => {
  const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

  const dispatch = useDispatch();
  const categoryId = useSelector(SelectFilterCategory);
  const changeCategory = (idx: string) => {
    dispatch(setCategoryId(idx));
    console.log(idx);
  };

  return (
    <section className={styles.categories}>
      <div className={styles.categories__container}>
        <ul className={styles.categories__list}>
          <p className={styles.categories__title}>Catalog</p>
          {categories.map((item, idx) => (
            <button
              onClick={() => changeCategory(item)}
              className={categoryId === item ? styles.active : styles.item}
              key={idx}>
              {item}
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
