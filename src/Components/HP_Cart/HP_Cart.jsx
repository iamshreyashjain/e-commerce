import React from 'react';
import { RiDeleteBin5Fill, RiVisaFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi";
import { useCart } from '../../context/CartContext'; // Import useCart
import { MdCurrencyRupee } from 'react-icons/md';

const HP_Cart = () => {
  const { cart, removeFromCart } = useCart(); // Use cart and removeFromCart from CartContext

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.variants[0].selPrice, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/ecomm/">
            <button className="btn btn-dark">
              <HiShoppingBag className="me-2" /> Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cart.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={product.variants[0].images[0]} alt={product.name} className="img-thumbnail me-3" style={{ width: '100px' }} />
                  <div>
                    <h5>{product.name}</h5>
                    <p>{product.variants[0].color} - {product.variants[0].ram}</p>
                    <div className="d-flex align-items-center">
                      <MdCurrencyRupee className="mb-1" />
                      <span>{product.variants[0].selPrice}</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
                  <RiDeleteBin5Fill />
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: <MdCurrencyRupee className="mb-1" />{calculateTotal()}</h4>
            <button className="btn btn-dark">
              <RiVisaFill className="me-2" /> Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HP_Cart;
