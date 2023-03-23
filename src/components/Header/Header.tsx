import React, { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import Search from '../Search/Search';
import CartButton from '../UI/button/CartButton';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={logo} alt="Company-logo" />
        </div>
        <div className={styles.header__search}>
          <Search />
        </div>
        <CartButton>cart</CartButton>
      </div>
    </div>
  );
};

export default Header;
