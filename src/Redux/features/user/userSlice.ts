import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type ICredential = {
  email: string;
  password: string;
  name: string;
};
type ILoginCredential = {
  email: string;
  password: string;
};

type InitialState = {
  email: string | null;
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
};

const initialState: InitialState = {
  email: '',
  isLoading: false,
  isError: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
