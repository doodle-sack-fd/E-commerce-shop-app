import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface IFilter {
  searchQuery: string;
  categoryId: string;
}

const initialState: IFilter = {
  searchQuery: '',
  categoryId: "men's clothing",
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },
  },
});

export const SelectFilterSearch = (state: RootState) => state.filter.searchQuery;
export const SelectFilterCategory = (state: RootState) => state.filter.categoryId

export const { setSearchQuery, setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
