import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';
import Category from './components/Category';
import AuthLayout from './layouts/AuthLayout';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import NewsDetails from './components/NewsDetails';
import PrivateRout from './components/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Navigate to="/category/01"></Navigate>,
      },
      {
        path:"/category/:id",
        element:<Category></Category>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path : "/auth/login",
        element :<Login></Login>
      },
      {
        path : "/auth/register",
        element :<Register></Register>,
      },
    ]
  },
  {
    path:'/news/:id',
    element:<PrivateRout><NewsDetails></NewsDetails></PrivateRout>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
