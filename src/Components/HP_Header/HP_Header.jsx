import { BiUser } from "react-icons/bi";
import{Link} from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { BsShop } from "react-icons/bs";

import logo from "../../assets/images/Logo.jpeg"

import './HP_Header.css';

export default function  HP_Header(){
  return(
    <>
    {/* only bootstrap is used*/}
    <div className="container-fluid  bg-primary bg-gradient shadow">
      <div className="row mx-2 auto">

      {/*One*/}
        <div className='col-lg-2 col-md-2 col-sm-2 col-2 py-2'>
        <Link to ="">
        <img src={logo} width = "40px"  alt="Logo" className="col rounded-circle"></img>
        </Link>
        </div>

      {/*Two*/}
      <div className='col-lg-5 col-md-5 col-sm-5 col-6 mt-2'>
      <input type="text" className='col-lg-12 col-md-12 col-sm-12 col px-3 form-control text-dark-emphasis' placeholder="Search Here..."></input>
      </div>
      
      {/*Three*/}
        <div className='col-lg-5 col-md-5 col-sm-5 col px-2'>
          <div className="row mt-2 ">

           {/*Three-One => date: 12/05/2024  Dynamic need to be replaced*/}
           {/*Three-One => If Logged in Login should be replaced with user's Name*/}
          <div className="col-lg-3 col-md-3 col-sm-3 col-4">
          <button className="btn btn-primary">
            <Link to ="/customerlogin" className="text-decoration-none text-white">
            {/* Custom CSS 'navbar_icon' => to scale*/} 
              <BiUser className="mx-2 navbar_icon"/>
              {/* Custom CSS 'navbar_text'*/} 
              <span className="navbar_text">Login</span>
            </Link>
          </button>
          </div>
            {/*Three-Two =>  */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-4">
              <button className="btn btn-primary">
                <Link to="" className="text-decoration-none text-white">
                  <BsCart3 className="mx-2 navbar_icon"/>
                  {/* Custom CSS 'navbar_text'*/}
                  <span className="navbar_text">Cart</span>
                </Link>
              </button>
            </div>
            
            {/*Three-Three*/}
            <div className="col-lg-6 col-md-6 col-sm-3 col-4">
              <button className="btn btn-primary">
                <Link to="/vendor" className="text-decoration-none text-white">
                  <BsShop className="mx-2 navbar_icon"/>
                  {/* Custom CSS 'navbar_text'*/}
                  <span className="navbar_text">Become a Vendor</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>




    </>
  )
}
