import { IProductsItem } from './../slices/products/productSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IFetchProductsProps {
  category: string;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (params: IFetchProductsProps, thunkAPI) => {
    try {
      const { category } = params;

      const { data } = await axios.get(`https://fakestoreapi.com/products${category}`);

      return data as IProductsItem[];
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось сделать запрос');
    }
  },
);
