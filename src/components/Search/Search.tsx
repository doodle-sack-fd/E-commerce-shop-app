import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './Search.module.scss';

import { SelectFilterSearch, setSearchQuery } from '../../redux/slices/Filters/FilterSlice';

import { useDispatch } from 'react-redux';

import { DebounceInput } from 'react-debounce-input';

const Search: FC = () => {
  const searchQuery = useSelector(SelectFilterSearch);
  const dispatch = useDispatch();

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setSearchQuery(evt.target.value));
  }
    
  return (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      className={styles.search}
      placeholder="Введите ваш запрос"
      value={searchQuery}
      onChange={onChangeInput}></DebounceInput>
  );
};

export default Search;
