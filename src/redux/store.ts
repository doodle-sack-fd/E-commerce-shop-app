import CartSlice from './slices/Cart/CartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import productSlice from './slices/products/productSlice';
import filterSlice from './slices/Filters/FilterSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    filter: filterSlice,
    cart: CartSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ['deleteProductCart'],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
  //       // Ignore these paths in the state
  //       ignoredPaths: ['items.dates'],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
