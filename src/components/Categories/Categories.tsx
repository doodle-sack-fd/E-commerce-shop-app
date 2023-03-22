import React, { FC } from 'react';
import styles from './Categories.module.scss';

const Categories: FC = () => {
  const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <ul className={styles.categories__list}>
          {categories.map((item) => (
            <button className={styles.item} key={item}>{item}</button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
