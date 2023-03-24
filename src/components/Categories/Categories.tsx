import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SelectFilterCategory, setCategoryId } from '../../redux/slices/Filters/FilterSlice';
import styles from './Categories.module.scss';

const Categories: FC = () => {
  const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

  const categoryId = useSelector(SelectFilterCategory);
 
  const dispatch = useDispatch()

  const changeCategory = (idx: string) => {
    dispatch(setCategoryId(idx))
    console.log(idx);
   
  }

  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <ul className={styles.categories__list}>
          <p className={styles.categories__title}>Catalog</p>
          {categories.map((item, idx) => (
            
            <button onClick={() => changeCategory(item)} className={styles.item} key={idx}>
              {item}
            </button>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
