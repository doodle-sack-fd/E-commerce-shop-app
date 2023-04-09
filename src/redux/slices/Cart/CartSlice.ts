import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcMinusTotalPrice, calcTotalPrice } from '../../../utils/calcTotalPrice';
import { getItemLs } from '../../../utils/getItemLs';

export interface ICartSlice {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}

export interface IUserData {
  [x: string]: any;
  email: string;
  name: string;
  address: {
    city: string;
    street: string;
    house: string;
    country: string;
  };
}

export interface ICartState {
  cartProducts: ICartSlice[];
  totalPrice: number;
  order: { orderData: ICartSlice[]; userData: IUserData[] };
}
const getLocalStorageFromFunc = getItemLs();

const initialState: ICartState = {
  cartProducts: getLocalStorageFromFunc.localData,
  totalPrice: getLocalStorageFromFunc.totalPrice,
  order: {
    orderData: getLocalStorageFromFunc.localOrderData,
    userData: getLocalStorageFromFunc.localUserData,
  },
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ICartSlice>) => {
      const product = state.cartProducts.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calcTotalPrice(state.cartProducts);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const product = state.cartProducts.filter((item) => item.id !== action.payload);

      state.cartProducts = product;

      state.totalPrice = calcMinusTotalPrice(state.cartProducts);
    },
    minusProduct: (state, action) => {
      const product = state.cartProducts.find((item) => item.id === action.payload);

      product.quantity > 1
        ? product.quantity--
        : (state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload));

      state.totalPrice = calcMinusTotalPrice(state.cartProducts);
    },
    addOrder: (state, action: PayloadAction<any>) => {
      state.order.orderData.push(action.payload);
      state.cartProducts = [];
      state.totalPrice = 0;
    },
    addUserData: (state, action: PayloadAction<any>) => {
      state.order.userData.push(action.payload);
    },
  },
});

export const SelectAllCart = (state: RootState) => state.cart;
export const SelectCartAddProduct = (state: RootState) => state.cart.cartProducts;
export const SelectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const SelectOrder = (state: RootState) => state.cart.order;
export const { addProductToCart, removeProduct, minusProduct, addOrder, addUserData } =
  CartSlice.actions;

export default CartSlice.reducer;
