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
import Booking from "../Pages/Booking/Booking/Booking";
import AdvertisingBooking from "../Pages/Booking/Booking/AdvertisingBooking";
import Order from "../Pages/Booking/Order/Order";
import AdvertisingOrder from "../Pages/Booking/Order/AdvertisingOrder";
import AllRentHousePost from "../Pages/All/AllRentHousePost";
import AllBuySellPost from "../Pages/All/AllBuySellPost";
import AllAdvertisingPost from "../Pages/All/AllAdvertisingPost";
import MyRentHousePost from "../Pages/My/MyRentHousePost";
import MyBuySellPost from "../Pages/My/MyBuySellPost";
import MyAdvertisingPost from "../Pages/My/MyAdvertisingPost";
import MyOrder from "../Pages/My/MyOrder";
import MyBooking from "../Pages/My/MyBooking";

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
          {
            path: '/rentHouseReq',
            element: <AllRentHousePost></AllRentHousePost>
          },
          {
            path: '/buySellReq',
            element: <AllBuySellPost></AllBuySellPost>
          },
          {
            path: '/advertisingReq',
            element: <AllAdvertisingPost></AllAdvertisingPost>
          },
          {
            path: '/myRentHouse',
            element: <MyRentHousePost></MyRentHousePost>
          },
          {
            path: '/myBuySell',
            element: <MyBuySellPost></MyBuySellPost>
          },
          {
            path: '/myAdvertising',
            element: <MyAdvertisingPost></MyAdvertisingPost>
          },
          {
            path: '/myBooking',
            element: <MyBooking></MyBooking>
          },
          {
            path: '/myOrder',
            element: <MyOrder></MyOrder>
          },
            
            {
              path: '/booking/:id',
              element: <Booking></Booking>,
              loader: ({params}) => fetch(`http://localhost:5000/rentHouses/${params.id}`),
          },
            {
              path: '/advertisingBooking/:id',
              element: <AdvertisingBooking></AdvertisingBooking>,
              loader: ({params}) => fetch(`http://localhost:5000/createAdvertisings/${params.id}`),
          },
            {
              path: '/order/:id',
              element: <Order></Order>,
              loader: ({params}) => fetch(`http://localhost:5000/buySell/${params.id}`),
          },
            {
              path: '/advertisingOrder/:id',
              element: <AdvertisingOrder></AdvertisingOrder>,
              loader: ({params}) => fetch(`http://localhost:5000/createAdvertisings/${params.id}`),
          },
          
        ]
      },
  ]);