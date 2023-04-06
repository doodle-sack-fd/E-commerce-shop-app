import { calcTotalPrice } from './calcTotalPrice';

export const getItemLs = () => {
  const local = localStorage.getItem('cartProduct');
  const localData = local ? JSON.parse(local) : [];

  const totalPrice = calcTotalPrice(localData);

  const orderData = localStorage.getItem('orderData');
  const localOrderData = orderData ? JSON.parse(orderData) : [];

  const userData = localStorage.getItem('userData');
  const localUserData = userData ? JSON.parse(userData) : [];

  return {
    localData,
    totalPrice,
    localOrderData,
    localUserData,
  };
};
