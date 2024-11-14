import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import { FirebaseProvider } from './context/firebase.jsx';
import { ProductProvider } from './context/ProductContext.jsx';

// HP_Routes
import HP_Login from './Components/HP_Login/HP_Login.jsx';
import HP_Register from './Components/HP_Register/HP_Register.jsx';
import HP_HomeScreen from './Components/HP_HomeScreen/HP_HomeScreen.jsx';
import HP_Product from './Components/HP_Product/HP_Product.jsx';
import HP_Search from './Components/HP_Search/HP_Search.jsx';
import HP_Cart from './Components/HP_Cart/HP_Cart.jsx';
import HP_Payment from './Components/HP_Payments/HP_Payment.jsx';


// VP_Routes
import VP_Base from './Components/VP_Base/VP_Base.jsx';
import VP_WelcomeMessage from './Components/VP_WelcomeMessage/VP_WelcomeMessage.jsx';
import VP_LoginPage from './Components/VP_LoginPage/VP_LoginPage.jsx';
import VP_Register from './Components/VP_Register/VP_Register.jsx';
import VP_LoginOTP from './Components/VP_LoginOTP/VP_LoginOTP.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import HP_Wishlist from './Components/HP_Wishlist/HP_Wishlist.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HP_HomeScreen /> },
      { path: '/customerlogin', element: <HP_Login /> },
      { path: '/search', element: <HP_Search /> },
      { path: '/customer/registration', element: <HP_Register /> },
      { path: '/:category/:productId', element: <HP_Product /> },
      { path: '/cart', element: <HP_Cart /> },
      { path: '/wishlist', element: <HP_Wishlist /> },
      { path: '/:payment/:productId"', element: <HP_Payment /> },
    ]
  },
  {
    path: '/vendor',
    element: <VP_Base />,
    children: [
      { path: '/vendor', element: <VP_WelcomeMessage /> },
      { path: '/vendor/login', element: <VP_LoginPage /> },
      { path: '/vendor/loginotp', element: <VP_LoginOTP /> },
      { path: '/vendor/registration', element: <VP_Register /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <FirebaseProvider>
            <RouterProvider router={router} />
          </FirebaseProvider>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>

);
