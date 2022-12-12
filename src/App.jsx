import "./App.css";
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Cart from './views/Cart';
import { useState } from "react";
import ErrorPage from "./views/errorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />
      },
    ],
  }
]);

const App = () => {
  const [totalItem, setTotalItem] = useState(0);
  
  const handleAddToCart  = (value) => {
    setTotalItem(value);
  };

  return (
    <div className="app">
      
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
