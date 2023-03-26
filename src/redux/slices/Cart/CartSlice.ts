import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcMinusTotalPrice, calcTotalPrice } from '../../../utils/calcTotalPrice';

export interface ICartSlice {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}

export interface ICartState {
  cartProducts: ICartSlice[];
  totalPrice: number;
}

const initialState: ICartState = {
  cartProducts: [],
  totalPrice: 0,
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
  },
});

export const SelectAllCart = (state: RootState) => state.cart;
export const SelectCartAddProduct = (state: RootState) => state.cart.cartProducts;
export const SelectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const { addProductToCart, removeProduct } = CartSlice.actions;

export default CartSlice.reducer;
