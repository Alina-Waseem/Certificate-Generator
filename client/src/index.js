import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Certificate'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {index: true, element: <Home/>},
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
);
