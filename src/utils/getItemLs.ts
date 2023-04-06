import { calcTotalPrice } from './calcTotalPrice';

export const getItemLs = () => {
  const cart = localStorage.getItem('cartProduct');
  const localData = cart ? JSON.parse(cart) : [];

  const totalPrice = calcTotalPrice(localData);

  const orderData = localStorage.getItem('orderData');
  const localOrderData = orderData ? JSON.parse(orderData) : [];

  const userData = localStorage.getItem('userData');
  const localUserData = userData ? JSON.parse(userData) : [];

  const liked = localStorage.getItem('isLiked');
  const localLiked = liked ? JSON.parse(liked) : [];

  return {
    localData,
    totalPrice,
    localOrderData,
    localUserData,
    localLiked,
  };
};
