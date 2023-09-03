import { IBook } from '@/Constants/constants';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  books: IBook[];
  wishlist: IBook[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: InitialState = {
  books: [],
  wishlist: [],
  isLoading: false,
  isError: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
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
    setWishlist: (state, action: PayloadAction<IBook>) => {
      const existsBook = state.wishlist.find(
        (book) => book._id === action.payload?._id
      );
      if (!existsBook) {
        state.wishlist.push(action.payload);
        state.isError = false;
        state.error = null;
        state.isLoading = false;
      } else if (existsBook) {
        state.isError = true;
        state.error = 'The book already exists in the wishlist❗';
        state.isLoading = true;
      }
    },
  },
});

export const { setBooksStart, setBooksFailure, setBooksSuccess, setWishlist } =
  bookSlice.actions;

export default bookSlice.reducer;
