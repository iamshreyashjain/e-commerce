import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext'; // Import Cart context
import { MdCurrencyRupee } from 'react-icons/md';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi";

export default function HP_Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist(); // Use wishlist context
  const { addToCart } = useCart(); // Use cart context

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
                  <img src={product.images[0]} alt={product.name} className="img-thumbnail me-3" style={{ width: '200px' }} />
                  <div>
                    <h5>{product.name}</h5>
                    <p>Brand: {product.brand}</p>
                    <p>Variant: {product.variants[0].color} - {product.variants[0].ram || product.variants[0].type || ''}</p>
                    <div className="d-flex align-items-center">
                      <MdCurrencyRupee className="mb-1" />
                      <span>{product.price[0].selPrice}</span>
                      <p className="mb-1 text-muted ms-2"><del>{product.price[0].ogPrice}</del></p>
                    </div>
                    <div className="mt-2">
                      <button 
                        className="btn btn-primary me-2"
                        onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                      <button 
                        className="btn btn-outline-danger"
                        onClick={() => removeFromWishlist(product.id)}>
                        <RiDeleteBin5Fill />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
