/* eslint-disable no-unsafe-optional-chaining */
import { useEffect } from 'react';
import Main from './Layout/Main';
import { useAppDispatch } from './Redux/hooks';
import { setLoading, setUser } from './Redux/features/user/userSlice';
import {
  useGetAllBooksQuery,
  useRefreshTokenMutation,
} from './Redux/api/apiSlice';
import Cookies from 'js-cookie';
import { setBooksSuccess } from './Redux/features/books/bookSlice';

function App() {
  const dispatch = useAppDispatch();
  const [refresh] = useRefreshTokenMutation();
  const refreshToken = Cookies.get('refreshToken');

  const { data: books, error } = useGetAllBooksQuery({
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    const refreshAccessToken = async () => {
      if (refreshToken) {
        dispatch(setLoading(true));

        try {
          const res = await refresh({});
          if (res?.data?.success) {
            // console.log(res.data.data.user);
            const { email, name, _id } = res?.data?.data?.user;
            const { accessToken } = res?.data?.data;
            dispatch(setUser({ _id, email, name, token: accessToken }));
          }
        } catch (error) {
          // console.error('Error refreshing access token:', error);
        }

        dispatch(setLoading(false));
      }
    };

    dispatch(setBooksSuccess(books?.data));
    refreshAccessToken();
  }, [books, dispatch, refresh, refreshToken]);

  if (error) {
    return (
      <div className="w-1/1 h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      <Main />
    </div>
  );
}

export default App;
