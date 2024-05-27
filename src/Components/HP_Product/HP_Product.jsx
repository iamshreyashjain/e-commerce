import image_1 from "../../assets/images/iphone13_thumbnail_1.jpg";
import { FaStar } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

import './HP_Product.css';

const rating = 5;
const total_rating = 3;
const total_reviews = 2;

// const offer = [];
const offer = ['Get 200Rs Off', 'Get 300Rs Off', 'Get 400Rs Off', 'Get 500Rs Off' , 'Get 600Rs Off' ];

export default function HP_Product() {
    return (
        <>
            <div className='d-flex flex flex-row justify-content-between m-5 shadow shadow-2'>
                <div className='col-lg-6 col-md-6  text-center'>
                    <div>
                        <img src={image_1} className="col-lg-6 col-md-6 col-sm-8 col-8 p-2" alt="iPhone 13" />
                    </div>
                </div>
                <div className='d-flex flex flex-column col-lg-6 col-md-6'>
                    <div><h3>Apple iPhone 13 (Starlight, 128 GB)</h3></div>
                    <div className="d-flex flex  justify-content-between">
                        <p>Apple</p>
                        <p className="mx-3">Apple Inc. </p>
                    </div>
                    <div className="d-flex flex flex-row">
                        <span className={`d-flex flex`}>
                        {total_rating > 0 ?
                            <>
                            {rating >= 0 ?
                            <>
                            <div style={{height: "25px"}} className={`p-1 d-flex flex ${rating >= 3.5 ? 'bg-success' : rating <= 1 ? 'bg-danger' : 'bg-warning'} rounded rounded-2`}>
                                <h6 className="text-light ">{rating}</h6>
                                <FaStar className="text-light mx-2 "></FaStar>
                            </div>
                            <p className="text-secondary mx-2">Ratings {total_rating} </p>
                            <p className="text-secondary mx-2">Reviews {total_reviews}</p>
                            </>
                            :
                            <> 
                            <p>No Ratings yet...</p>
                            </>
                            }
                        </>
                        :<><p>No Ratings yet...</p></>
                    }
                        </span>
                    </div>
                    <div className="d-flex flex flex-column">
                    {offer.length !== 0 ? (
                        <>
                            <h6>Available Offers</h6>
                            <div className="mx-2">
                                {offer.map((data, index) => (
                                    <>
                                    <FaTags className="text-danger  mx-2"></FaTags>
                                    <span key={index}>{data}</span>
                                    <br/>
                                    </>
                                ))}
                            </div>
                        </>
                    ) : (
                        <></>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    );
}