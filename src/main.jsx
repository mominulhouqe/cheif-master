import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Shared/Main.jsx';
import Home from './components/Shared/Home.jsx';
import Login from './components/Shared/Register/Login.jsx';
import SignUp from './components/Shared/Register/SignUp.jsx';
import Chiefs from './components/ChiefStaap/Chiefs.jsx';
import ChefDetails from './components/ChefsCategory/ChefDetails.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/views/:id',
        element: <PrivateRoute> <ChefDetails /> </PrivateRoute>,
       loader:({params}) =>fetch('https://chef-master-server-blond.vercel.app/datas').then((response) => response.json())
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
