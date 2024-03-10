import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import RentHouse from "../Pages/RentHouse/RentHouse";
import BuySell from "../Pages/BuySell/BuySell";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/logIn',
            element: <LogIn></LogIn>
          },
          {
            path: '/register',
            element: <Register></Register>
          },
          {
            path: '/rentHouse',
            element: <RentHouse></RentHouse>
          },
          {
            path: '/buySell',
            element: <BuySell></BuySell>
          },
        ]
      },
  ]);