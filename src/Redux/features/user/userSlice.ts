import { User } from '@/Types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
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
      console.log(action.payload);
      state.user = action.payload || { email: null, token: null };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  //   extraReducers: (builder) => {},
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
