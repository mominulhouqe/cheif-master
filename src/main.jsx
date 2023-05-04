import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Shared/Main.jsx';
import Home from './components/Shared/Home.jsx';
import Login from './components/Shared/Register/Login.jsx';
import SignUp from './components/Shared/Register/SignUp.jsx';
import Chiefs from './components/ChiefStaap/Chiefs.jsx';
import ChefDetails from './components/ChefsCategory/ChefDetails.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: '/views',
        element: <ChefDetails></ChefDetails>,
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <SignUp></SignUp>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
