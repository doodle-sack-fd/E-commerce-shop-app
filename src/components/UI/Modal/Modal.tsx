import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({isOpen, setIsOpen}) => {
  return (
    <div onClick={() => setIsOpen(false)} className={isOpen ? styles.modal : styles.modal__close}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal__container}>Modal</div>
    </div>
  );
};

export default Modal;
