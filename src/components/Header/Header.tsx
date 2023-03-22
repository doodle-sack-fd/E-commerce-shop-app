import React, { FC, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import Search from '../Search/Search';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { useAppDispatch } from '../../redux/store';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getItems = async () => {
      dispatch(fetchProducts());
      
    };
    getItems()
  });

  

  

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="Company-logo" />
        </div>
        <div className={styles.header__search}>
          <Search />
        </div>
        <button className={styles.header__cart}>
          <div className={styles.header__cartIcon}>
            <AiOutlineShoppingCart />
          </div>
          Корзина
        </button>
      </div>
    </div>
  );
};

export default Header;
