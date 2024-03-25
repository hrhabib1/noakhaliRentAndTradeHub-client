import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import RentHouse from "../Pages/RentHouse/RentHouse";
import AddRentHouse from "../Pages/AddPost/RentHouse/AddRentHouse";
import AddBuySell from "../Pages/AddPost/BuySell/AddBuySell";
import Furnitures from "../Pages/BuySell/Furnitures";
import ElectronicDevice from "../Pages/BuySell/ElectronicDevice";
import Vehicles from "../Pages/BuySell/Vehicles";
import AdvertisingRentHouse from "../Pages/CreateAdvertising/AdvertisingRentHouse";
import AdvertisingBuySell from "../Pages/CreateAdvertising/AdvertisingBuySell";
import Advertising from "../Pages/Advertising/Advertising";

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
            path: '/furnitures',
            element: <Furnitures></Furnitures>
          },
          {
            path: '/electronicDevices',
            element: <ElectronicDevice></ElectronicDevice>
          },
          {
            path: '/furnitures',
            element: <Furnitures></Furnitures>
          },
          {
            path: '/vehicles',
            element: <Vehicles></Vehicles>
          },
          {
            path: '/AddRentHouse',
            element: <AddRentHouse></AddRentHouse>
          },
          {
            path: '/AddBuySell',
            element: <AddBuySell></AddBuySell>
          },
          {
            path: '/AddvertisingRentHouse',
            element: <AdvertisingRentHouse></AdvertisingRentHouse>
          },
          {
            path: '/AddvertisingBuySell',
            element: <AdvertisingBuySell></AdvertisingBuySell>
          },
          {
            path: '/Addvertising',
            element: <Advertising></Advertising>
          },
        ]
      },
  ]);