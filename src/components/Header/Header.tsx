import React, { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import CartButton from '../UI/button/CartButton';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link to=''>
          <div className={styles.header__logo}>
            <img src={logo} alt="Company-logo" />
          </div>
        </Link>
        <div className={styles.header__search}>
          <Search />
        </div>

        <Link to="/cart" className={styles.header__link}>
          <CartButton>cart</CartButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
