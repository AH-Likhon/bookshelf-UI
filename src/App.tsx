import { useEffect } from 'react';
import Main from './Layout/Main';
import { useAppDispatch } from './Redux/hooks';
import { setLoading, setUser } from './Redux/features/user/userSlice';
import { useRefreshTokenMutation } from './Redux/api/apiSlice';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useAppDispatch();
  const [refresh] = useRefreshTokenMutation();
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    const refreshAccessToken = async () => {
      if (refreshToken) {
        dispatch(setLoading(true));

        try {
          const res = await refresh({});
          if (res.data.success) {
            const { email, name } = res.data.data.user;
            const { accessToken } = res.data.data;
            dispatch(setUser({ email, name, token: accessToken }));
          }
        } catch (error) {
          // console.error('Error refreshing access token:', error);
        }

        dispatch(setLoading(false));
      }
    };

    refreshAccessToken();
  }, [dispatch, refresh, refreshToken]);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Main />
    </div>
  );
}

export default App;
