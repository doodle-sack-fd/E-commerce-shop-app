import { ICartSlice } from "../redux/slices/Cart/CartSlice";

export const calcTotalPrice = (items: ICartSlice[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.quantity + sum;
  }, 0);
};
