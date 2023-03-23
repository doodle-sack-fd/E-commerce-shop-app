import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import productSlice from './slices/products/productSlice';
import filterSlice from './slices/Filters/FilterSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
