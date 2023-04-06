import { useDispatch, useSelector } from 'react-redux';
import { removeLiked, SelectIsLiked } from '../../../redux/slices/products/productSlice';
import styles from './Modal.module.scss';
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, setIsOpen }) => {
  const isLiked = useSelector(SelectIsLiked);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const jsonLiked = JSON.stringify(isLiked);
      localStorage.setItem('isLiked', jsonLiked);
    }
    isMounted.current = true;
  }, [isLiked]);

  const removeLike = () => {
    dispatch(removeLiked());
  };

  return (
    <div onClick={() => setIsOpen(false)} className={isOpen ? styles.modal : styles.modal__close}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal__container}>
        <p>Your liked</p>
        {isLiked &&
          isLiked.map((item, idx) => (
            <li key={idx} className={styles.modal__item}>
              <div>
                <img src={item.image} width="50" height="50" alt="goods" />
              </div>
              <div className="modal__desc">
                <p>{item.title}</p>
                <p>{item.price} $</p>
              </div>
              <button onClick={removeLike}>Удалить из избранного</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Modal;
