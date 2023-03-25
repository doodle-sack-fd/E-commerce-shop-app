import React, { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import CartButton from '../UI/button/CartButton';
import { useSelector } from 'react-redux';
import { SelectCartTotalPrice } from '../../redux/slices/Cart/CartSlice';

const Header: FC = () => {
  const totalPrice = useSelector(SelectCartTotalPrice);

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link to="">
          <div className={styles.header__logo}>
            <img src={logo} alt="Company-logo" />
          </div>
        </Link>
        <div className={styles.header__search}>
          <Search />
        </div>

        <Link to="/cart" className={styles.header__link}>
          <CartButton>{totalPrice}$ cart</CartButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
