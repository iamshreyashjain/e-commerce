import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.jpeg'
import { BsShop } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

import './VP_Header.css';

export default function VP_Header() {
  return (
    <>
    <header className="d-flex flex w-100 p-2 align-items-center justify-content-center border-bottom shadow shadow-1">
      <Link to="/ecomm/vendor" className="col-lg-3 col-md-3 col-sm-3 col-3">
        <img src={logo} width = "40px"  alt="Logo" className="col rounded-circle"/>
      </Link>

    <ul className="nav col-lg-6 col-md-6 col-sm-6 col-6 justify-content-center">
      <li><Link to ="/ecomm/vendor" className="nav-link px-2 link-dark">Home</Link></li>
      <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
    </ul>
    <div className="d-flex flex align-items-center justify-content-evenly col-lg-3 col-md-3 col-sm-3 col-3 ">
    <Link to ="/ecomm/vendor/login" className="text-decoration-none text-white">
        <button className="btn btn-primary">
          {/* Custom CSS 'navbar_icon' => to scale*/} 
            <BiUser className="mx-2 navbar_icon"/>
            {/* Custom CSS 'navbar_text'*/} 
            <span className="navbar_text">Login</span>
            </button>
            </Link>
      

    <Link to ="/ecomm">
      <button className=" btn btn-outline-primary align-content-start">
      {/* Custom CSS 'navbar_icon' => to scale*/} 
        <BsShop className="mx-2 navbar_icon mb-1"/>
        {/* Custom CSS 'navbar_text'*/} 
        <span className="navbar_text">Return Home</span>
      </button>
    </Link>
    </div>
  </header>
    </>
  );
}

