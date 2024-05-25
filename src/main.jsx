import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider} from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom'

{/* HP_Routes  */}
import HP_Login from './Components/HP_Login/HP_Login.jsx'
import HP_Register from './Components/HP_Register/HP_Register.jsx'
import HP_HomeScreen from './Components/HP_HomeScreen/HP_HomeScreen.jsx'
import HP_Product from './Components/HP_Product/HP_Product.jsx'


{/* VP_Routes */}
import VP_Base from './Components/VP_Base/VP_Base.jsx'
import VP_WelcomeMessage from './Components/VP_WelcomeMessage/VP_WelcomeMessage.jsx'
import VP_LoginPage from './Components/VP_LoginPage/VP_LoginPage.jsx'
import VP_Reister from './Components/VP_Register/VP_Register.jsx'
import VP_LoginOTP from './Components/VP_LoginOTP/VP_LoginOTP.jsx'



const router = createBrowserRouter([
  {path: "/",   element : <App/>, children: [
    {path: "/", element: <HP_HomeScreen/>},
    {path: "/customerlogin", element: <HP_Login/>},
    {path: "/customer/registration", element: <HP_Register/>},
    {path: "/product/iphone13", element: <HP_Product/>}
  ]},
  
  {path: "/vendor", element: <VP_Base/>, children:[
    {path: "/vendor", element: <VP_WelcomeMessage/> },
    {path: "/vendor/login", element: <VP_LoginPage/> },
    {path: "/vendor/login/otp", element: <VP_LoginOTP/> },
    {path: "/vendor/registration", element: <VP_Reister/> },
  ]},
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


