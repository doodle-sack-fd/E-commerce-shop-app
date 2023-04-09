import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ICartSlice, IUserData, SelectAllCart } from '../../../redux/slices/Cart/CartSlice';
import styles from './ListOrder.module.scss';

const ListOrder: FC = () => {
  const {
    order: { orderData, userData },
  } = useSelector(SelectAllCart);
  console.log(userData);
  return (
    <div className={styles.listOrder}>
      <div>
        {orderData.map((item, id) => (
          <div className={styles.listOrder__container}>
            <div>заказ номер: {id + 1}</div>
            {item.map((i:ICartSlice, idx: number) => (
              <p>
                {idx + 1} - {i.title}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div>
        {userData.map((item, id) => (
          <div className={styles.listOrder__container}>
            <div>Данные заказчика: {id + 1}</div>
            {item.map((i: IUserData) => (
              <>
                <p>ФИО: {i.name}</p>
                <p>Электронная почта: {i.email}</p>
                <p>Город: {i.address.city}</p>
                <p>Улица: {i.address.street}</p>
                <p>Дом: {i.address.house}</p>
                <p>Страна: {i.address.country}</p>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOrder;
