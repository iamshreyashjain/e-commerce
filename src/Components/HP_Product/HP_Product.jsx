import { useState } from 'react';
import { FaStar, FaTags, FaShoppingCart, FaCreditCard } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import ReactImageMagnify from 'react-image-magnify';
import { FaRegHeart } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

import { FaHeart } from "react-icons/fa6";

// White 
import iphone13 from '../../assets/images/iphone13.jpg';
import iphone13One from '../../assets/images/iphone13_thumbnail_1.jpg';
import iphone13Two from '../../assets/images/iphone13thumbnail_2.jpg';
import iphone13Three from '../../assets/images/iphone13thumbnail_3.jpg';
import iphone13Four from '../../assets/images/iphone13thumbnail_4.jpg';

//Blue
import blueIphoneOne from '../../assets/images/iPhone_Variants/blue/blueiphoneOne.jpg'
import blueIphoneTwo from '../../assets/images/iPhone_Variants/blue/blueiphoneTwo.jpg'
import blueIphoneThree from '../../assets/images/iPhone_Variants/blue/blueiphoneThree.jpg'
import blueIphoneFour from '../../assets/images/iPhone_Variants/blue/blueiphoneFour.jpg'
import blueIphoneFive from '../../assets/images/iPhone_Variants/blue/blueiphoneFive.jpg'

//Green
import greenIphoneOne from '../../assets/images/iPhone_Variants/Green/GreeniphoneOne.jpg'
import greenIphoneTwo from '../../assets/images/iPhone_Variants/Green/GreeniphoneTwo.jpg'
import greenIphoneThree from '../../assets/images/iPhone_Variants/Green/GreeniphoneThree.jpg'
import greenIphoneFour from '../../assets/images/iPhone_Variants/Green/GreeniphoneFour.jpg'

//Pink
import pinkIphoneOne from '../../assets/images/iPhone_Variants/pink/pinkiphoneOne.jpg'
import pinkIphoneTwo from '../../assets/images/iPhone_Variants/pink/pinkiphoneTwo.jpg'
import pinkIphoneThree from '../../assets/images/iPhone_Variants/pink/pinkiphoneThree.jpg'
import pinkIphoneFour from '../../assets/images/iPhone_Variants/pink/pinkiphoneFour.jpg'

const rating = 5;
const total_rating = 1;
const total_reviews = 2;

const offer = [
  'Get 300Rs Off',
  'Get 400Rs Off',
  'Get 500Rs Off',
  'Get 600Rs Off',
];

const variants = [
  {
    color: 'White',
    rams: [
      { ram: '128GB', ogPrice: 65000, selprice: 54000, images: [iphone13, iphone13One, iphone13Two, iphone13Three, iphone13Four]},
      { ram: '256GB', ogPrice: 70000, selprice: 58000, images: [iphone13, iphone13One, iphone13Two, iphone13Three, iphone13Four]},
      { ram: '512GB', ogPrice: 75000, selprice: 62000, images: [iphone13, iphone13One, iphone13Two, iphone13Three, iphone13Four]},
    ],
  },
  {
    color: 'Blue',
    rams: [
      { ram: '128GB', ogPrice: 64000, selprice: 55000, images: [blueIphoneOne, blueIphoneTwo, blueIphoneThree, blueIphoneFour, blueIphoneFive ]},
      { ram: '256GB', ogPrice: 72000, selprice: 58000, images: [blueIphoneOne, blueIphoneTwo, blueIphoneThree, blueIphoneFour, blueIphoneFive ]},
      { ram: '512GB', ogPrice: 75000, selprice: 66000, images: [blueIphoneOne, blueIphoneTwo, blueIphoneThree, blueIphoneFour, blueIphoneFive ]},
    ],
  },
  {
    color: 'Green',
    rams: [
      { ram: '128GB', ogPrice: 65000, selprice: 54000, images: [greenIphoneOne, greenIphoneTwo, greenIphoneThree, greenIphoneFour] },
      { ram: '256GB', ogPrice: 70000, selprice: 58000, images: [greenIphoneOne, greenIphoneTwo, greenIphoneThree, greenIphoneFour] },
      { ram: '512GB', ogPrice: 75000, selprice: 62000, images: [greenIphoneOne, greenIphoneTwo, greenIphoneThree, greenIphoneFour] },
    ],
  },
  {
    color: 'Pink',
    rams: [
      { ram: '128GB', ogPrice: 65000, selprice: 54000, images: [pinkIphoneOne, pinkIphoneTwo, pinkIphoneThree, pinkIphoneFour] },
      { ram: '256GB', ogPrice: 70000, selprice: 58000, images: [pinkIphoneOne, pinkIphoneTwo, pinkIphoneThree, pinkIphoneFour] },
      { ram: '512GB', ogPrice: 75000, selprice: 62000, images: [pinkIphoneOne, pinkIphoneTwo, pinkIphoneThree, pinkIphoneFour]},
    ],
  },
  
];

import './HP_Product.css';

export default function HP_Product() {
  const [selectedColorVariant, setSelectedColorVariant] = useState(variants[0]);
  const [selectedRamVariant, setSelectedRamVariant] = useState(selectedColorVariant.rams[0]);
  
  const [gallery, setGallery] = useState(selectedRamVariant.images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [like, setLike] = useState(false)
  

  const handleColorChange = (colorVariant) => {
    setSelectedColorVariant(colorVariant);
    setSelectedRamVariant(colorVariant.rams[0]);
    setGallery(colorVariant.rams[0].images[0]);
    setSelectedIndex(0);
  };

  const handleRamChange = (ramVariant) => {
    setSelectedRamVariant(ramVariant);
    setGallery(ramVariant.images[0]);
    setSelectedIndex(0);
  };

  const handleOnClick = (index) => {
    setGallery(selectedRamVariant.images[index]);
    setSelectedIndex(index);
  };

  const displayPrice = (ramVariant) => {
    if (ramVariant.selprice) {
      return (
        <div className="d-flex flex-row align-items-center">
          <h4>
            <MdCurrencyRupee className="mb-1" />
            {ramVariant.selprice}
          </h4>
          <div className="text-decoration-line-through text-secondary mx-2">
            <MdCurrencyRupee className="mb-2" />
            {ramVariant.ogPrice}
          </div>
        </div>
      );
    } else {
      return (
        <h4>
          <MdCurrencyRupee className="mb-1" />
          {ramVariant.ogPrice}
        </h4>
      );
    }
  };

  const [cartText, setCartText] = useState("Add to cart")

  const handleAddToCart = () => {
    setCartText("Added")
  };

  const handleBuyNow = () => {
    // Logic to proceed with buying the item
    console.log('Proceed to buy the item');
  };

  const handleLikeButton = (e) =>{
    if(like !== true){
      setLike(true)
      console.log(e.target);
      }
      else{
        setLike(false)
        console.log('false');
    }
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex-lg-row flex-column overflow-scroll justify-content-between mx-5 p-3 shadow shadow-2">
        <div className="col-lg-6">
          <div className="d-flex flex m-auto">
            {selectedRamVariant.images.length > 0 && (
              <div className="d-flex flex-column col-lg-1 col-md-1 col-sm-1 col-2">
                {selectedRamVariant.images.map((data, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleOnClick(index)}
                    className={selectedIndex === index ? 'border border-2 border-primary-subtle' : ''}
                  >
                    <img src={data} alt={`Thumbnail ${index + 1}`} className="img-fluid my-1" />
                  </div>
                ))}
              </div>
            )}
            <div className="border border-2 col-lg-9 col-md-6 col-sm-6 align-content-center mx-2">
              <ReactImageMagnify
                smallImage={{
                  isFluidWidth: true,
                  src: gallery,
                }}
                largeImage={{
                  src: gallery,
                  width: 1200,
                  height: 1200,
                }}
                isHintEnabled={true}
                shouldHideHintAfterFirstActivation={false}
                isEnlargedImagePortalEnabledForTouch={true}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column col-lg-6 mt-3 mt-lg-0">
          <div className="d-flex flex justify-content-between">
            <h4>Apple iPhone 13 ({selectedColorVariant.color}, {selectedRamVariant.ram})</h4>
            <div className=' d-flex flex justify-content-end gap-1 col-lg-2 col-md-1 col-sm-1 col-1  '>
            <button className='btn btn-outline-dark'>
            {like ? <FaHeart onClick={handleLikeButton}  color="red"/> : <FaRegHeart onClick={handleLikeButton}  />}
            </button>
            <button className='btn btn-outline-dark'>
            <PiShareFatBold />
            </button>

            </div>
          </div>

          <div className="d-flex flex justify-content-between">
            <p>Apple</p>
            <p className="">Apple Inc.</p>
          </div>

          <div className="d-flex flex flex-row">
            <span className="d-flex flex">
              {total_rating > 0 ? (
                <>
                  {rating >= 0 && (
                    <>
                      <div
                        style={{ height: '25px' }}
                        className={`p-1 d-flex flex ${rating >= 3.5 ? 'bg-success' : rating <= 1 ? 'bg-danger' : 'bg-warning'} rounded rounded-2`}
                      >
                        <h6 className="text-light">{rating}</h6>
                        <FaStar className="text-light mx-2" />
                      </div>
                      <p className="text-secondary mx-2">Ratings {total_rating}</p>
                      <p className="text-secondary mx-2">Reviews {total_reviews}</p>
                    </>
                  )}
                </>
              ) : (
                <p>No Ratings yet...</p>
              )}
            </span>
          </div>

          <div className="d-flex flex flex-row">
            {displayPrice(selectedRamVariant)}
          </div>

          <div className="d-flex flex flex-column">
            {offer.length !== 0 && (
              <>
                <h5>Available Offers</h5>
                <div className="mx-3">
                  {offer.map((data, index) => (
                    <div key={index} className="d-flex flex">
                      <h5>
                        <FaTags className="text-success mx-2" />
                      </h5>
                      <div>{data}</div>
                      <br />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="d-flex flex-lg-row flex-column mt-3">
            <h6 className='text-secondary align-content-center'>Color</h6>
            <div className="d-flex flex">
              {variants.map((variant, index) => (
                <img
                  key={index}
                  src={variant.rams[0].images[0]}
                  alt={variant.color}
                  onClick={() => handleColorChange(variant)}
                  className={`col-lg-2 col-md-1 col-sm-1 col-2 mx-1 img-fluid object-fit-scale rounded rounded-circle shadow shadow-2  ${variant.color === selectedColorVariant.color ? 'border border-3 border-info opacity-100' : 'border border-2  border-info-subtle'}`}
                />
              ))}
            </div>
          
            <h6 className='text-secondary align-content-center'>Ram</h6>
            <div className="d-flex flex">
              {selectedColorVariant.rams.map((ramVariant, index) => (
                <button
                  key={index}
                  onClick={() => handleRamChange(ramVariant, console.log(ramVariant))}
                  className={`btn mx-1 mb-1 align-self-center ${ramVariant.ram === selectedRamVariant.ram ? 'active' : ''}`}
                >
                  {ramVariant.ram}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex flex-lg-row flex-column gap-1 mt-3">
          <button className="btn btn-warning text-white p-3 col-lg-6 shadow shadow-1" onClick={handleAddToCart}><FaShoppingCart className="" /> {cartText}</button>
            <button className=" btn_Buybutton text-white p-3 col-lg-6  shadow shadow-1" onClick={handleBuyNow}><FaCreditCard className="" /> Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
