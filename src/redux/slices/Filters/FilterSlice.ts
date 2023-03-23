import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface IFilter {
  searchQuery: string;
}

const initialState: IFilter = {
  searchQuery: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const SelectFilterAll = (state: RootState) => state.filter;

export const { setSearchQuery } = filterSlice.actions;

export default filterSlice.reducer;
