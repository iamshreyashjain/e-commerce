import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { MdCurrencyRupee } from 'react-icons/md';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Use wishlist context

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <div>
          <p>Your wishlist is empty.</p>
          <Link to="/">
            <button className="btn btn-dark">
              <HiShoppingBag className="me-2" /> Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="list-group mb-4">
          {wishlist.map((product) => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {product.selectedVariant && product.selectedVariant.images && (
                  <img src={product.selectedVariant.images[0]} alt={product.name} className="img-thumbnail me-3" style={{ width: '100px' }} />
                )}
                <div>
                  <h5>{product.name}</h5>
                  {product.selectedVariant && (
                    <p>{product.selectedVariant.color} - {product.selectedVariant.ram}</p>
                  )}
                  {product.selectedVariant && (
                    <div className="d-flex align-items-center">
                      <MdCurrencyRupee className="mb-1" />
                      <span>{product.selectedVariant.selPrice}</span>
                    </div>
                  )}
                </div>
              </div>
              <button className="btn btn-outline-danger" onClick={() => removeFromWishlist(product.id)}>
                <RiDeleteBin5Fill />
              </button>
            </li>
          ))}
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
