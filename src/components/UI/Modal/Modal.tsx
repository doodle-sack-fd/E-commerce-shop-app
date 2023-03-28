import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IProductsItem, removeLiked, SelectIsLiked, selectProducts, selectProductsAll } from '../../../redux/slices/products/productSlice';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, setIsOpen }) => {
  const isLiked = useSelector(SelectIsLiked);
  const dispatch = useDispatch()
  const { id, title, price, description, category, image } = useSelector(selectProductsAll);
  console.log(isLiked);
const removeLike = () => {
  const item: IProductsItem = {
    id,
    title,
    price,
    description,
    category,
    image,
  };
  dispatch(removeLiked(item));
};
  ;
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
