import { calcTotalPrice } from "./calcTotalPrice";

export const getItemLs = () => {
  const local = localStorage.getItem('cartProduct');
  const localData = local ? JSON.parse(local) : [];
  const totalPrice = calcTotalPrice(localData)

  return {
    localData,
    totalPrice
  }
};
