import { ICartSlice } from "../redux/slices/Cart/CartSlice";

export const calcTotalPrice = (items: ICartSlice[]) => {
  return items.reduce((sum, item) => {
    return Math.floor(item.price * item.quantity + sum);
  }, 0);
};

export const calcMinusTotalPrice = (items: ICartSlice[]) => {
  return items.reduce((sum, item) => {
    return Math.floor(item.price * item.quantity + sum);
  }, 0);
};