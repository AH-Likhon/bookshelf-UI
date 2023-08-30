import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  genre: '',
  year: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

// export const {  } = bookSlice.actions;

export default bookSlice.reducer;
