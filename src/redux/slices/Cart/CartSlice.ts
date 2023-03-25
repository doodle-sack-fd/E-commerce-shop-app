import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';

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
  products: ICartSlice[];
  totalPrice: number;
}

const initialState: ICartState = {
  products: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ICartSlice>) => {
      const product = state.products.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calcTotalPrice(state.products);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products =  state.products.filter((item) => item.id !== action.payload)
    },
  },
});

export const SelectAllCart = (state: RootState) => state.cart;
export const SelectCartAddProduct = (state: RootState) => state.cart.products;
export const SelectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const { addProductToCart, removeProduct } = CartSlice.actions;

export default CartSlice.reducer;
