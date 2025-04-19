import React from 'react';
import {createBrowserRouter,} from "react-router";
import Root from '../Pages/Rootes/Root';
import ErorrPage from '../Pages/ErorrPage/ErorrPage';
import Home from '../Pages/Home/Home';
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErorrPage></ErorrPage>,
      children: [
        {
          index: true,
          loader: ()=>fetch('booksData.json'),
          path: "/",
          Component: Home,
        }
      ]
    },
  ]);
