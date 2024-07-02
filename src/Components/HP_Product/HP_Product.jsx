import React, { useState, useEffect } from 'react';
import { FaStar, FaTags, FaShoppingCart, FaCreditCard, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from './../../context/ProductContext';
import { useCart } from './../../context/CartContext';
import { useWishlist } from './../../context/WishlistContext';
import { useFirebase } from './../../context/firebase';
import { PiShareFatBold } from 'react-icons/pi';

export default function HP_Product() {
  const { category, productId } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { currentUser, logout } = useFirebase();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartText, setCartText] = useState("Add to cart");
  const [mainImage, setMainImage] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const categoryProducts = products[category];
    if (categoryProducts) {
      const product = categoryProducts.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setMainImage(product.images[0]);
      }
    }
  }, [category, productId, products]);

  const displayPrice = (price) => (
    <div className="d-flex flex-row align-items-center">
      <h4>
        <MdCurrencyRupee className="mb-1" />
        {price.selPrice}
      </h4>
      {price.selPrice !== price.ogPrice && (
        <div className="text-decoration-line-through text-secondary mx-2">
          <MdCurrencyRupee className="mb-2" />
          {price.ogPrice}
        </div>
      )}
    </div>
  );

  const handleAddToCart = () => {
    if (!currentUser) {
      alert('Please login to allow this feature');
      return;
    }
    setCartText("Added");
    addToCart(selectedProduct);
  };

  const handleBuyNow = () => {
    if (!currentUser) {
      alert('Please login to allow this feature');
      return;
    }
    console.log('Proceed to buy the item');
    // Implement logic for immediate purchase
  };

  const isInWishlist = wishlist.some(item => item.id === selectedProduct?.id);

  const handleWishlistToggle = () => {
    if (!currentUser) {
      alert('Please login to allow this feature');
      return;
    }
    if (isInWishlist) {
      removeFromWishlist(selectedProduct?.id);
    } else {
      addToWishlist(selectedProduct);
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setMainImage(selectedProduct.images[index]);
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex-lg-row flex-column mx-2 p-3 shadow shadow-2">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
            <img src={mainImage} alt={selectedProduct.name} className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <div className="d-flex flex-row mt-2 justify-content-center">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProduct.name}-${index}`}
                className={`img-thumbnail me-2 ${index === activeIndex ? 'border border-dark' : ''}`}
                onMouseOver={() => handleThumbnailClick(index)}
                style={{ cursor: 'pointer', width: '60px', height: '60px' }}
              />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column col-lg-6 mt-3 mt-lg-0">
          <div className="d-flex justify-content-between">
            <h4>{selectedProduct.name}</h4>
            <div className='d-flex justify-content-end gap-1'>
              <button className='btn btn-outline-dark' onClick={handleWishlistToggle}>
                {isInWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
              </button>
              <button className='btn btn-outline-dark'>
                <PiShareFatBold />
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <FaStar className="me-1 text-warning" />
              <span>{selectedProduct.rating}</span>
            </div>
            <div className="text-muted">({selectedProduct.totalReviews} reviews)</div>
          </div>
          <div className="mt-2">
            {displayPrice(selectedProduct.price[0])}
          </div>
          <div className="mt-2">
            <span className="me-2"><FaTags className="text-primary" /> Offers:</span>
            {selectedProduct.offers.map((offer, index) => (
              <span key={index} className="badge bg-primary mx-1">{offer}</span>
            ))}
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-dark me-2" onClick={handleAddToCart} disabled={!currentUser}>
              <FaShoppingCart className="me-1" /> {cartText}
            </button>
            <button className="btn btn-dark" onClick={handleBuyNow} disabled={!currentUser}>
              <FaCreditCard className="me-1" /> Buy Now
            </button>
          </div>
          <div className="mt-4">
            {selectedProduct.variants && (
              <div>
                <h5>Specifications:</h5>
                <ul className="list-unstyled">
                  {Object.entries(selectedProduct.variants[0]).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
