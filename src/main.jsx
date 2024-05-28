import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import { Main } from 'next/document.js';
import Root from './Root.jsx';
import Detect from './Detect.jsx';
import Train from './Train.jsx';
import { Result } from 'postcss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/train",
        element: <Train></Train>
      },
      { 
        path: "/detectDisease",
        element: <Detect></Detect>
      },
      {
        path: "/result",
        element: <Result></Result>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
