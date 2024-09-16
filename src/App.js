import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersList, { loader as usersLoader } from './pages/UsersList';
import UserDetail from './pages/UserDetail';
import PostDetail from './pages/PostDetail';
import Favorites from './pages/Favorites';
import Layout from './components/Layout';

// createBrowserRouter kullanarak router yapılandırıyoruz
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UsersList />,
        loader: usersLoader, // Loader'ı burada belirtiyoruz
      },
      {
        path: 'users/:userId',
        element: <UserDetail />,
      },
      {
        path: 'users/:userId/posts/:postId',
        element: <PostDetail />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // RouterProvider ile uygulamanın root'u sağlanır
}

export default App;
