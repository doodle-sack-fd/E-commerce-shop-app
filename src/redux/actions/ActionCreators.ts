import { IProductsItem } from './../slices/products/productSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    return data as IProductsItem[];
  } catch (error) {
    return thunkAPI.rejectWithValue('Не удалось сделать запрос');
  }
});
