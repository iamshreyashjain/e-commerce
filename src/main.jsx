import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import { FirebaseProvider } from './context/firebase.jsx';

// HP_Routes
import HP_Login from './Components/HP_Login/HP_Login.jsx';
import HP_Register from './Components/HP_Register/HP_Register.jsx';
import HP_HomeScreen from './Components/HP_HomeScreen/HP_HomeScreen.jsx';
import HP_Product from './Components/HP_Product/HP_Product.jsx';

// VP_Routes
import VP_Base from './Components/VP_Base/VP_Base.jsx';
import VP_WelcomeMessage from './Components/VP_WelcomeMessage/VP_WelcomeMessage.jsx';
import VP_LoginPage from './Components/VP_LoginPage/VP_LoginPage.jsx';
import VP_Register from './Components/VP_Register/VP_Register.jsx';  
import VP_LoginOTP from './Components/VP_LoginOTP/VP_LoginOTP.jsx';
import HP_Search from './Components/HP_Search/HP_Search.jsx';
import HP_Cart from './Components/HP_Cart/HP_Cart.jsx';
import HP_Address from './Components/HP_Address/HP_Address.jsx';
import HP_Wishlist from './Components/HP_Wishlist/HP_Wishlist.jsx';


const router = createBrowserRouter([
  {
    path: '/ecomm/', 
    element: <App />, 
    children: [
      { path: '/ecomm/', element: <HP_HomeScreen /> }, 
      { path: '/ecomm/customerlogin', element: <HP_Login/> },
      { path: '/ecomm/search', element: <HP_Search /> },
      { path: '/ecomm/customer/registration', element: <HP_Register /> },
      { path: '/ecomm/product/iphone13', element: <HP_Product /> },
      { path: '/ecomm/cart', element: <HP_Cart/> },
      { path: '/ecomm/address', element: <HP_Address/> },
      { path: '/ecomm/wishlist', element: <HP_Wishlist/> },
    ]
  },
  {
    path: '/ecomm/vendor', 
    element: <VP_Base />, 
    children: [
      { path: '/ecomm/vendor', element: <VP_WelcomeMessage /> },  
      { path: '/ecomm/vendor/login', element: <VP_LoginPage /> },
      { path: '/ecomm/vendor/loginotp', element: <VP_LoginOTP /> },
      { path: '/ecomm/vendor/registration', element: <VP_Register /> }  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);