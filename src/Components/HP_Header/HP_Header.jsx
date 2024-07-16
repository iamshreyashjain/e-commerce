import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { useFirebase } from './../../context/firebase'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";

import logo from '../../assets/images/Logo.jpeg';
import './HP_Header.css';

export default function HP_Header() {
  const { currentUser, logout } = useFirebase();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate('/');
      await logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  const handleDisabledButtonClick = () => {
    alert('Please login to access this feature.');
  };

  return (
    <div className="d-flex bg-primary bg-gradient gap-2 justify-content-between py-2">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Link to="/">
          <img src={logo} width="40px" alt="Logo" className="ms-3 rounded-circle" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="col-lg-6 col-md-6 ">
        <input
          type="text"
          className="form-control text-dark-emphasis"
          placeholder="Search Here..."
        />
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center align-items-center">
        {/* Login/Logout Button */}
        <div className="me-1">
          {currentUser ? (
            <button className="btn btn-primary" onClick={handleLogout}>
              <CgLogOut className="mx-2 navbar_icon" />
              <span className="navbar_text">Logout</span>
            </button>
          ) : (
            <Link to="/customerlogin" className="text-decoration-none text-white">
              <button className="btn btn-primary">
                <FiLogIn className="mx-2 navbar_icon" />
                <span className="navbar_text">Login</span>
              </button>
            </Link>
          )}
        </div>

        {/* Cart Button */}
        <div className="me-1">
          {currentUser ? (
            <Link to="/cart" className="text-decoration-none text-white">
              <button className="btn btn-primary">
                <BsCart3 className="mx-2 mb-1 navbar_icon" />
                <span className="navbar_text">Cart</span>
              </button>
            </Link>
          ) : (
            <button className="btn btn-primary" onClick={handleDisabledButtonClick}>
              <BsCart3 className="mx-2 mb-1 navbar_icon" />
              <span className="navbar_text">Cart</span>
            </button>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="me-1">
          {currentUser ? (
            <Link to="/wishlist" className="text-decoration-none text-white">
              <button className="btn btn-primary">
                <FaRegHeart className="mx-2 mb-1 navbar_icon" />
                <span className="navbar_text">Your Wishlist</span>
              </button>
            </Link>
          ) : (
            <button className="btn btn-primary" onClick={handleDisabledButtonClick}>
              <FaRegHeart className="mx-2 mb-1 navbar_icon" />
              <span className="navbar_text">Your Wishlist</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
