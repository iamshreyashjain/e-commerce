import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { BsCart3, BsShop } from 'react-icons/bs';
import { useFirebase } from './../../context/firebase'; // Adjust the path accordingly

import logo from '../../assets/images/Logo.jpeg';
import './HP_Header.css';

export default function HP_Header() {
  const { currentUser, logout } = useFirebase();
  const [loading, setLoading] = React.useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-primary bg-gradient shadow">
      <div className="row mx-2 auto">
        {/* Logo */}
        <div className='col-lg-2 col-md-2 col-sm-2 col-2 py-2'>
          <Link to="/ecomm/">
            <img src={logo} width="40px" alt="Logo" className="col rounded-circle" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className='col-lg-5 col-md-5 col-sm-5 col-6 mt-2'>
          <input
            type="text"
            className='col-lg-12 col-md-12 col-sm-12 col px-3 form-control text-dark-emphasis'
            placeholder="Search Here..."
          />
        </div>

        {/* Navigation Buttons */}
        <div className='col-lg-5 col-md-5 col-sm-5 col-3 px-2'>
          <div className="row mt-2">
            {/* Login/Logout Button */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-4">
              {currentUser ? (
                <button className="btn btn-primary" onClick={handleLogout} disabled={loading}>
                  <BiUser className="mx-2 navbar_icon" />
                  <span className="navbar_text">{loading ? 'Logging out...' : 'Logout'}</span>
                </button>
              ) : (
                <Link to="/ecomm/customerlogin" className="text-decoration-none text-white">
                  <button className="btn btn-primary">
                    <BiUser className="mx-2 navbar_icon" />
                    <span className="navbar_text">Login</span>
                  </button>
                </Link>
              )}
            </div>

            {/* Cart Button */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-4">
              <Link to="/ecomm/cart" className="text-decoration-none text-white">
                <button className="btn btn-primary">
                  <BsCart3 className="mx-2 mb-1 navbar_icon" />
                  <span className="navbar_text">Cart</span>
                </button>
              </Link>
            </div>

            {/* Vendor Button */}
            <div className="col-lg-6 col-md-6 col-sm-3 col-4">
              <Link to="/ecomm/vendor" className="text-decoration-none text-white">
                <button className="btn btn-primary">
                  <BsShop className="mx-2 mb-1 navbar_icon" />
                  <span className="navbar_text">Become a Vendor</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
