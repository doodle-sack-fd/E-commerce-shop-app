import React, { FC, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';

import { AiOutlineHeart } from 'react-icons/ai';

import Search from '../Search/Search';
import CartButton from '../UI/button/CartButton';
import { useSelector } from 'react-redux';
import { SelectCartTotalPrice } from '../../redux/slices/Cart/CartSlice';
import Modal from '../UI/Modal/Modal';

const Header: FC = () => {
  const totalPrice = useSelector(SelectCartTotalPrice);
  const [isOpen, setIsOpen] = useState(false);

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
        <AiOutlineHeart onClick={() => setIsOpen(true)} className={styles.header__liked} />
        <Link to="/cart" className={styles.header__link}>
          <CartButton>{totalPrice}$ cart</CartButton>
        </Link>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
