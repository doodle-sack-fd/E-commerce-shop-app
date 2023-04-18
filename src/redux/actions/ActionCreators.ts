import { IProductsItem } from './../slices/products/productSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IFetchProductsProps {
  category: string;
}

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (params: IFetchProductsProps, thunkAPI) => {
    try {
      const { category } = params;
      console.log(params) // mainblock fetch

      const { data } = await axios.get(API_URL + `${category}`);
      console.log(category);
      return data as IProductsItem[];
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось сделать запрос');
    }
  },
);
