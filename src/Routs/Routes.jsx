import React from 'react';
import {createBrowserRouter,} from "react-router";
import Root from '../Pages/Rootes/Root';
import ErorrPage from '../Pages/ErorrPage/ErorrPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
// const loadData = async () => {
//   const response = await fetch('/booksData.json');
//   if (!response.ok) {
//     throw new Error('Failed to load book data');
//   }
//   const data = await response.json();
//   return data;
// }

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErorrPage></ErorrPage>,
      children: [
        {
          index: true,
          loader: ()=>fetch('/booksData.json'),
          Component: Home,
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: '/bookDetails/:id',
          loader: ()=>fetch('/booksData.json'),
          Component: BookDetails
        }
      ]
    },
  ]);
