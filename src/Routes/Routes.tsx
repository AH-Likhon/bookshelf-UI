import App from '@/App';
import Books from '@/Pages/Books/Books';
import Home from '@/Pages/Home/Home';
import Login from '@/Pages/Login/Login';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
