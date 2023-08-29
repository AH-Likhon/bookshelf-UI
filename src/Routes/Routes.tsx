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
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/add-book',
        element: <AddNewBook />,
      },
      {
        path: '/edit',
        element: <EditBook />,
      },
      {
        path: '/details',
        element: <BookDetails />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/reading',
        element: <CurrentlyReading />,
      },
    ],
  },
]);

export default router;
