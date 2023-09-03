import { IBook } from '@/Constants/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  books: IBook[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: InitialState = {
  books: [],
  isLoading: false,
  isError: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooksStart: (state) => {
      state.isLoading = true;
    },
    setBooksSuccess: (state, action: PayloadAction<IBook[]>) => {
      // console.log('LLL', action.payload);
      state.isLoading = false;
      state.books = action.payload;
    },
    setBooksFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { setBooksStart, setBooksFailure, setBooksSuccess } =
  bookSlice.actions;

export default bookSlice.reducer;
