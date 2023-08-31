import { User } from '@/Types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  [x: string]: any;
  user: User;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: InitialState = {
  user: {
    email: null,
    token: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      console.log(action?.payload?.token);
      state.user = action.payload || { email: null, token: null };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLogOut: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload || { email: null, token: null };
    },
  },
  //   extraReducers: (builder) => {},
});

export const { setUser, setLoading, setLogOut } = userSlice.actions;

export default userSlice.reducer;
