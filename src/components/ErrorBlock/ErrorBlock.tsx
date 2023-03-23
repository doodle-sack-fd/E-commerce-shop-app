import React from 'react';
import styles from './ErrorBlock.module.scss'

const ErrorBlock = () => {
  return (
    <div className={styles.error}>
      <h2>Произошла ошибка 😕</h2>
      <p>К сожалению, не удалось получить товары. Попробуйте повторить попытку позже.</p>
    </div>
  );
};

export default ErrorBlock;