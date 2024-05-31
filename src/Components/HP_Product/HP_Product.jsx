import { FaStar } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";


import ReactImageMagnify  from 'react-image-magnify';



import iphone13 from "../../assets/images/iphone13.jpg";
import iphone13One from "../../assets/images/iphone13_thumbnail_1.jpg";
import iphone13Two from "../../assets/images/iphone13thumbnail_2.jpg";
import iphoneThree from "../../assets/images/iphone13thumbnail_3.jpg";
import iphoneFour from "../../assets/images/iphone13thumbnail_4.jpg";

import "./HP_Product.css";

const rating =1;
const total_rating =0
const total_reviews = 2;

const op = 60000;
const sp = 54000;

// const offer = [];
const offer = [
  "Get 200Rs Off",
  "Get 300Rs Off",
  "Get 400Rs Off",
  "Get 500Rs Off",
  "Get 600Rs Off",
];

export default function HP_Product() {
    const imgArr = [iphone13, iphone13One, iphone13Two, iphoneThree, iphoneFour];
    const [gallery, setGallery] = useState(imgArr[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleOnClick = (index) => {
      setGallery(imgArr[index]);
      setSelectedIndex(index);
    };
  
    return (
      <>
        <div className="mt-5"></div>
        {/* In this a page is divided into two parts */}
        <div className="d-flex flex flex-row justify-content-between mx-5 p-2 shadow shadow-2">
         {/* Section I */}
          <div className="col-lg-6 col-md-4 text-center">
            <div className="d-flex flex col-lg-4 justify-content-between mx-2 m-auto ">
              {imgArr.length > 0 ? (
                <div className="d-flex flex-column m-auto border border-1">
                  {imgArr.map((data, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => handleOnClick(index)}
                      className={selectedIndex === index ? "border border-2  border-primary-subtle": ""}
                    >
                      <img src={data} alt={`Thumbnail ${index + 1}`} width="100px" height="100px" className="my-2"/>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="col-lg-1"></div>
              <div className="border border-2 align-content-center">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: false,
                    height: 500,
                    width: 500,
                    src: gallery,
                  },
                  largeImage: {
                    src: gallery,
                    width: 1000,
                    height: 1000,
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                }}
              />
              </div>    
            </div>
          </div>
  
            {/* Section II */}
          <div className="d-flex flex flex-column col-lg-6 col-md-6">
            <div className="d-flex flex ">
              <h3>Apple iPhone 13 (Starlight, 128 GB)</h3>
              <FiShare2 />
            </div>
  
            <div className="d-flex flex  justify-content-between">
              <p>Apple</p>
              <p className="mx-3">Apple Inc.</p>
            </div>
  
            <div className="d-flex flex flex-row">
              <span className={`d-flex flex`}>
                {total_rating > 0 ? (
                  <>
                    {rating >= 0 ? (
                      <>
                        <div style={{ height: "25px" }} className={`p-1 d-flex flex ${ rating >= 3.5 ? "bg-success" : rating <= 1 ? "bg-danger" : "bg-warning"} rounded rounded-2`}>
                          <h6 className="text-light">{rating}</h6>
                          <FaStar className="text-light mx-2" />
                        </div>
                        <p className="text-secondary mx-2">Ratings {total_rating}</p>
                        <p className="text-secondary mx-2">Reviews {total_reviews}</p>
                      </>
                    ) : (
                      null
                    )}
                  </>
                ) : (
                  <p>No Ratings yet...</p>
                )}
              </span>
            </div>
  
            <div className="d-flex flex flex-row">
              {op === sp ? (
                <h4><MdCurrencyRupee className="mb-1" />{sp}</h4>
              ) : (
                <>
                  <h4>
                    <MdCurrencyRupee className="mb-1" />
                    {sp}
                  </h4>
                  <div className="d-flex flex align-items-end mb-1 text-decoration-line-through text-secondary">
                    <MdCurrencyRupee className="mb-2" />
                    <h6>{op}</h6>
                  </div>
                </>
              )}
            </div>
  
            <div className="d-flex flex flex-column">
              {offer.length !== 0 ? (
                <>
                  <h6>Available Offers</h6>
                  <div className="mx-2">
                    {offer.map((data, index) => (
                      <div key={index}>
                        <FaTags className="text-success mx-2" />
                        <span>{data}</span>
                        <br />
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }