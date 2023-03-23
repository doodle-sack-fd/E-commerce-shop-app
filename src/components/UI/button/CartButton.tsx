import React from 'react'
import styles from './CarButton.module.scss'

import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartButton = ({children, ...props}) => {
  return (
    <button {...props} className={styles.cart}>
      <div className={styles.cart__cartIcon}>
        <AiOutlineShoppingCart />
      </div>
      {children}
    </button>
  );
}

export default CartButton