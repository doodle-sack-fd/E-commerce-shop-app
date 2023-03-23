import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styles from './Search.module.scss';

import { SelectFilterAll, setSearchQuery } from '../../redux/slices/Filters/FilterSlice';

import { useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';

const Search: FC = () => {
  const { searchQuery } = useSelector(SelectFilterAll);
  const dispatch = useDispatch()
  
  // const updateInput = useCallback(
  //   debounce((str: string) => {
  //     dispatch(setSearchQuery(str));
  //   }, 500),
  //   [],
  // );

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
     dispatch(setSearchQuery(evt.target.value));
  }

  return (
    <input
      className={styles.search}
      placeholder="Введите ваш запрос"
      value={searchQuery}
      onChange={onChangeInput}></input>
  );
};

export default Search;
