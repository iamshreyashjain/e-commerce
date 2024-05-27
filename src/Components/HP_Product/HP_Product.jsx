import image_1 from "../../assets/images/iphone13_thumbnail_1.jpg"


import { FaStar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

import './HP_Product.css';

export default function HP_Product(){

    return(
        <>
            <div className='d-flex flex flex-row justify-content-between m-5 shadow shadow-2'>
                <div className='col-lg-6 col-md-6 border border-1 text-center'>
                    <div>
                        <img src ={image_1} className="col-lg-6 col-md-6 col-sm-8 col-8 p-2" />
                    </div>
                </div>
                <div className='d-flex flex flex-column col-lg-6 col-md-6 border border-1'>
                    
                <div><h3>Apple iPhone 13 (Starlight, 128 GB)</h3></div>
                    
                    <div className="d-flex flex  justify-content-between">
                        <p>Apple {}</p>
                        <p>Apple Inc. </p>
                    </div>
                    
                    <div className = "d-flex flex flex-row justify-content-between  col-lg-6">
                        <span className = "d-flex flex justify-content-center align-items-center p-1 bg-success rounded rounded-2">
                            <h6 className="text-light">4.2</h6>
                            <FaStar className = " mb-2 text-light"></FaStar>
                        </span>
                        <p>total rated by</p>
                        <p> & total reviews</p>
                    </div>

                    <div className="d-flex flex flex-column">
                        <h6>Available Offers</h6>
                        <div className="mx-2">
                            <FaTag className="text-success"></FaTag>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}