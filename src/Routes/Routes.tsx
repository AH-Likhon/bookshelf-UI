import App from '@/App';
import Books from '@/Pages/Books/Books';
import Home from '@/Pages/Home/Home';
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
    ],
  },
]);

export default router;
