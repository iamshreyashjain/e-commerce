import React, { useState, useEffect } from 'react';
import { FaStar, FaTags, FaShoppingCart, FaCreditCard, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { PiShareFatBold } from 'react-icons/pi';

export default function HP_Product() {
  const { category, productId } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [cartText, setCartText] = useState("Add to cart");

  useEffect(() => {
    const categoryProducts = products[category];
    if (categoryProducts) {
      const product = categoryProducts.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setSelectedVariant(product.variants[0]); // Assuming variants are now standardized
      }
    }
  }, [category, productId, products]);

  const displayPrice = (variant) => (
    <div className="d-flex flex-row align-items-center">
      <h4>
        <MdCurrencyRupee className="mb-1" />
        {variant.selPrice}
      </h4>
      {variant.selPrice !== variant.ogPrice && (
        <div className="text-decoration-line-through text-secondary mx-2">
          <MdCurrencyRupee className="mb-2" />
          {variant.ogPrice}
        </div>
      )}
    </div>
  );

  const handleAddToCart = () => {
    setCartText("Added");
    addToCart(selectedProduct); // Add product to cart
  };

  const handleBuyNow = () => {
    console.log('Proceed to buy the item');
    // Implement logic for immediate purchase
  };

  const isInWishlist = wishlist.some(item => item.id === selectedProduct?.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(selectedProduct?.id);
    } else {
      addToWishlist(selectedProduct);
    }
  };

  if (!selectedProduct || !selectedVariant) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex-lg-row flex-column mx-5 p-3 shadow shadow-2">
        <div className="col-lg-6">
          <img src={selectedVariant?.images?.[0]} alt={selectedProduct.name} className="img-fluid" />
        </div>
        <div className="d-flex flex-column col-lg-6 mt-3 mt-lg-0">
          <div className="d-flex justify-content-between">
          
          { selectedVariant.color  && selectedVariant.ram ? <>
          <h4>{selectedProduct.name}({selectedVariant.ram}, {selectedVariant.color}) </h4>
          </> : <>
          <h4>{selectedProduct.name}</h4>
            </>
            }
            <div className='d-flex flex justify-content-end gap-1'>
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
            {displayPrice(selectedVariant)}
          </div>
          <div className="mt-2">
            <span className="me-2"><FaTags className="text-primary" /> Offers:</span>
            {selectedProduct.offers.map((offer, index) => (
              <span key={index} className="badge bg-primary mx-1">{offer}</span>
            ))}
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-dark me-2" onClick={handleAddToCart}>
              <FaShoppingCart className="me-1" /> {cartText}
            </button>
            <button className="btn btn-dark" onClick={handleBuyNow}>
              <FaCreditCard className="me-1" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
