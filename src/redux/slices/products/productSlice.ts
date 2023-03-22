import { fetchProducts } from './../../actions/ActionCreators';
import { createSlice } from '@reduxjs/toolkit';

export interface IProductsItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {};
}

export interface IProductState {
  products: IProductsItem[];
  status: string;
}

export enum StatusKey {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: IProductState = {
  products: [],
  status: StatusKey.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
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
export default productsSlice.reducer;
