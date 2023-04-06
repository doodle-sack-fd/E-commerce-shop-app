import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

import { Link, useLocation } from 'react-router-dom';

import { AiOutlineHeart } from 'react-icons/ai';

import Search from '../Search/Search';
import CartButton from '../UI/button/CartButton';
import { useSelector } from 'react-redux';
import { SelectCartAddProduct, SelectCartTotalPrice } from '../../redux/slices/Cart/CartSlice';
import Modal from '../UI/Modal/Modal';

const Header: FC = () => {
  const totalPrice = useSelector(SelectCartTotalPrice);
  const cartProducts = useSelector(SelectCartAddProduct);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const jsonCart = JSON.stringify(cartProducts);
      localStorage.setItem('cartProduct', jsonCart);
    }
    isMounted.current = true;
  }, [cartProducts, totalPrice]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="">
          <div className={styles.header__logo}>
            <img src={logo} alt="Company-logo" />
          </div>
        </Link>
        {location.pathname !== '/cart' && (
          <div className={styles.header__search}>
            <Search />
          </div>
        )}
        {location.pathname !== '/cart' && (
          <>
            <AiOutlineHeart onClick={() => setIsOpen(true)} className={styles.header__liked} />
            <Link to="/cart" className={styles.header__link}>
              <CartButton>{totalPrice}$ cart</CartButton>
            </Link>
          </>
        )}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
