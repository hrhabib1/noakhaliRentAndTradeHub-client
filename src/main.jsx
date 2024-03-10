import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-screen-xl mx-auto'>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
    </div>
   
  </React.StrictMode>,
)
