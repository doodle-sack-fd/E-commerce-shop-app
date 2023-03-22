import React, { FC } from 'react';
import styles from './Search.module.scss'

const Search: FC = () => {
  return <input className={styles.search} placeholder="Введите ваш запрос"></input>;
};

export default Search;
