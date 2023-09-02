import App from '@/App';
import AddNewBook from '@/Pages/AddNewBook/AddNewBook';
import BookDetails from '@/Pages/BookDetails/BookDetails';
import Books from '@/Pages/Books/Books';
import CurrentlyReading from '@/Pages/CurrentlyReading/CurrentlyReading';
import EditBook from '@/Pages/EditBook/EditBook';
import Home from '@/Pages/Home/Home';
import Login from '@/Pages/Login/Login';
import SignUp from '@/Pages/SignUp/SignUp';
import Wishlist from '@/Pages/Wishlist/Wishlist';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/details/:id',
        element: <BookDetails />,
      },
      {
        path: '/edit/:id',
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-book',
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/wishlist',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: '/reading',
        element: (
          <PrivateRoute>
            <CurrentlyReading />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
