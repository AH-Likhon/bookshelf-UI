import api from '@/Redux/api/apiSlice';
import { User } from '@/Types/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// [x: string]: any;

type InitialState = {
  user: User;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: InitialState = {
  user: {
    email: null,
    name: null,
    token: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

// export const refreshAccessToken = createAsyncThunk(
//   'user/refreshAccessToken',
//   async (_, { dispatch }) => {
//     try {
//       await api.endpoints.refreshToken.mutation();

//       // Fetch the updated user data from the server
//       const response = await api.endpoints.logIn.mutation({});
//       dispatch(setUser(response.data));
//     } catch (error) {
//       // Handle error (e.g., log out user or show an error message)
//     }
//   }
// );

// export const refreshAccessToken = createAsyncThunk(
//   'user/refreshAccessToken',
//   async (_, { dispatch }) => {
//     try {
//       const response = await api.endpoints.refreshToken.mutation({
//         refreshToken,
//       });

//       // Fetch the updated user data from the server
//       dispatch(setUser(response.data));
//     } catch (error) {
//       // Handle error (e.g., log out user or show an error message)
//     }
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload || { email: null, name: null, token: null };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLogOut: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload || { email: null, name: null, token: null };
    },
  },
  //   extraReducers: (builder) => {},
});

export const { setUser, setLoading, setLogOut } = userSlice.actions;

export default userSlice.reducer;
