import { fetchProducts } from './../../actions/ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ICartSlice } from '../Cart/CartSlice';

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProductsItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: IProductRating;
}

export interface IProductState {
  products: IProductsItem[];
  status: string;
  isLiked: IProductsItem[];
}

export enum StatusKey {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: IProductState = {
  products: [],
  status: StatusKey.LOADING,
  isLiked: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLiked: (state, action: PayloadAction<IProductsItem>) => {
      // const index = state.isLiked.findIndex((item) => item === action.payload);
      // console.log(index);
      // if (index !== action.payload.id) {

      // }
      // state.isLiked.splice(index, 1);

      state.isLiked.push(action.payload);
    },
    removeLiked: (state, action: PayloadAction<IProductsItem>) => {
      const index = state.isLiked.findIndex((item) => item === action.payload);
      state.isLiked.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = StatusKey.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = StatusKey.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = StatusKey.ERROR;
      state.products = [];
    });
  },
});

// !actions!
export const selectProductsAll = (state: RootState) => state.products;
export const selectProducts = (state: RootState) => state.products.products;
export const SelectIsLiked = (state: RootState) => state.products.isLiked;

export const { setIsLiked, removeLiked } = productsSlice.actions;

export default productsSlice.reducer;
