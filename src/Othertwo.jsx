import  { useState } from 'react';
import { FaStar, FaTags } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import ReactImageMagnify from 'react-image-magnify';
// import iphone13 from './assets/images/iphone13.jpg';
import iphone13One from './assets/images/iphone13_thumbnail_1.jpg';
import iphone13Two from './assets/images/iphone13thumbnail_2.jpg';
import iphone13Three from './assets/images/iphone13thumbnail_3.jpg';
import iphone13Four from './assets/images/iphone13thumbnail_4.jpg';

const rating = 5;
const total_rating = 1;
const total_reviews = 2;

const op = 60000;

const offer = [
  'Get 200Rs Off Get 200Rs Off Get 200Rs Off Get 200Rs Off ',
  'Get 300Rs Off',
  'Get 400Rs Off',
  'Get 500Rs Off',
  'Get 600Rs Off',
];

const variants = [
  {
    color: 'Red',
    rams: [
      { ram: '128GB', price: 54000, images: [iphone13One, iphone13Two, iphone13Three, iphone13Four] },
      { ram: '256GB', price: 58000, images: [iphone13One, iphone13Two, iphone13Three, iphone13Four] },
      { ram: '512GB', price: 62000, images: [iphone13One, iphone13Two, iphone13Three, iphone13Four] },
    ],
  },
  {
    color: 'Blue',
    rams: [
      { ram: '128GB', price: 55000, images: [iphone13Two, iphone13Three, iphone13Four, iphone13One] },
      { ram: '256GB', price: 59000, images: [iphone13Two, iphone13Three, iphone13Four, iphone13One] },
      { ram: '512GB', price: 63000, images: [iphone13Two, iphone13Three, iphone13Four, iphone13One] },
    ],
  },
  {
    color: 'Green',
    rams: [
      { ram: '128GB', price: 56000, images: [iphone13Three, iphone13Four, iphone13One, iphone13Two] },
      { ram: '256GB', price: 60000, images: [iphone13Three, iphone13Four, iphone13One, iphone13Two] },
      { ram: '512GB', price: 64000, images: [iphone13Three, iphone13Four, iphone13One, iphone13Two] },
    ],
  },
  {
    color: 'Black',
    rams: [
      { ram: '128GB', price: 57000, images: [iphone13Four, iphone13One, iphone13Two, iphone13Three] },
      { ram: '256GB', price: 61000, images: [iphone13Four, iphone13One, iphone13Two, iphone13Three] },
      { ram: '512GB', price: 65000, images: [iphone13Four, iphone13One, iphone13Two, iphone13Three] },
    ],
  },
];

export default function OtherTwo() {
  const [selectedColorVariant, setSelectedColorVariant] = useState(variants[0]);

  const [selectedRamVariant, setSelectedRamVariant] = useState(selectedColorVariant.rams[0]);

  const [gallery, setGallery] = useState(selectedRamVariant.images[0]);

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex flex-lg-row flex-md-row flex-sm-row flex-column overflow-scroll justify-content-between mx-5 p-2 shadow shadow-2">
        <div className="col-lg-6">
          <div className="d-flex flex mx-2 m-auto ">
            {selectedRamVariant.images.length > 0 ? (
              <div className="d-flex flex-column col-lg-2 col-md-2 col-sm-3 col-2">
                {selectedRamVariant.images.map((data, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleOnClick(index)}
                    className={selectedIndex === index ? 'border border-2 border-primary-subtle' : ''}
                  >
                    <img src={data} alt={`Thumbnail ${index + 1}`} className='col-lg-12 col-md-10 col-sm-12 col-12'/>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="border border-2 align-content-center mx-2">
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
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex flex-column col-lg-6 ok">
          <div className="d-flex flex">
            <h3>Apple iPhone 13 {selectedColorVariant.color} {selectedRamVariant.ram}</h3>
          </div>

          <div className="d-flex flex justify-content-between">
            <p>Apple</p>
            <p className="mx-3">Apple Inc.</p>
          </div>

          <div className="d-flex flex flex-row ">
            <span className={`d-flex flex`}>
              {total_rating > 0 ? (
                <>
                  {rating >= 0 ? (
                    <>
                      <div
                        style={{ height: '25px' }}
                        className={`p-1 d-flex flex ${
                          rating >= 3.5 ? 'bg-success' : rating <= 1 ? 'bg-danger' : 'bg-warning'
                        } rounded rounded-2`}
                      >
                        <h6 className="text-light ">{rating}</h6>
                        <FaStar className="text-light mx-2" />
                      </div>
                      <p className="text-secondary mx-2">Ratings {total_rating}</p>
                      <p className="text-secondary mx-2">Reviews {total_reviews}</p>
                    </>
                  ) : null}
                </>
              ) : (
                <p>No Ratings yet...</p>
              )}
            </span>
          </div>

          <div className="d-flex flex flex-row">
            <h4>
              <MdCurrencyRupee className="mb-1" />
              {selectedRamVariant.price}
            </h4>
            <div className="d-flex flex align-items-end mb-1 text-decoration-line-through text-secondary">
              <MdCurrencyRupee className="mb-2" />
              <h6>{op}</h6>
            </div>
          </div>

          <div className="d-flex flex flex-column">
            {offer.length !== 0 ? (
              <>
                <h5>Available Offers</h5>
                <div className="mx-3">
                  {offer.map((data, index) => (
                    <div key={index} className='d-flex flex'>
                      <h5><FaTags className="text-success mx-2"></FaTags></h5>
                      <div className="">{data}</div>
                      <br />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <div className='d-flex flex'>
            <h5>Colors</h5>
            <div className='d-flex flex'>
              {variants.map((variant, index) => (
                <img
                  key={index}
                  src={variant.rams[0].images[0]}
                  alt={variant.color}
                  onClick={() => handleColorChange(variant)}
                  className={`col-lg-1 mx-1 ${variant.color === selectedColorVariant.color ? 'border border-2 border-primary' : ''}`}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
          <div className='d-flex flex'>
            <h5>RAM</h5>
            <div className='d-flex flex'>
              {selectedColorVariant.rams.map((ramVariant, index) => (
                <button
                  key={index}
                  onClick={() => handleRamChange(ramVariant)}
                  className={`btn btn-outline-primary mx-1 ${ramVariant.ram === selectedRamVariant.ram ? 'active' : ''}`}
                >
                  {ramVariant.ram}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
