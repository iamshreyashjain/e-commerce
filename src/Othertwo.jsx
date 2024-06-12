import Vendor_customerSupport from "./assets/images/iPhone_Variants/Green/GreeniphoneOne.jpg";
import jeans1 from "./assets/images/jeans.jpg";
import lcd from"./assets/images/lcd.jpg"
import shirt from"./assets/images/shirt.jpg"
import dubai from"./assets/images/dubai.jpeg"
import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

import { FaRupeeSign } from "react-icons/fa";



// import './OtherTwo.css'

import { GoChevronRight } from "react-icons/go";

export default function OtherTwo() {
  return (
    <>
      <div className="d-flex flex flex-row justify-content-between mx-5 my-1 p-2 ">
        <div>
          <h4>Categories</h4>
        </div>
        <div>
          <button className="btn btn-primary">
            View More <GoChevronRight />{" "}
          </button>
        </div>
      </div>
      <div className="d-flex flex flex-row flex-wrap gap-2 mx-5 p-3 shadow shadow-1">
        <div className="d-flex flex-column border col-lg-3 shadow">
            <div className="text-center col-lg-12 pt-2">
            <img
              src={lcd}
              className="img-fluid" 
              style={{minHeight: '340px', maxHeight: '340px'}}
            />
            </div>
            <hr></hr>
            <div className= "my-2 mx-2">
              <h5 className="text-secondary">Levis</h5>
              <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
                <div className="d-flex col-lg-12 flex justify-content-between">
                <div>
                <FaRupeeSign />
                <span className="fw-bold">2000</span>
                </div>
                <h4 className="d-flex flex justify-content-evenly col-lg-3">
                <FaRegHeart />
                <IoMdCart />
                </h4>
                </div>
          </div> 
        </div>   

        <div className="d-flex flex-column border col-lg-3 shadow">
        <div className="text-center col-lg-12 pt-2">
        <img
          src={jeans1}
          className="img-fluid" 
          style={{minHeight: '340px', maxHeight: '340px'}}
        />
        </div>
        <hr></hr>
        <div className= "col-lg-12 my-2 mx-2">
          <h5 className="text-secondary">Levis</h5>
          <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
            <div className="d-flex col-lg-12 flex justify-content-between">
            <div>
              <p>2000</p>
            </div>
            <h4 className="d-flex flex justify-content-evenly col-lg-3">
            <FaRegHeart />
            <IoMdCart />
            </h4>
            </div>
      </div> 
    </div>   

    <div className="d-flex flex-column border col-lg-3 shadow">
    <div className="text-center col-lg-12 pt-2">
    <img
      src={Vendor_customerSupport}
      className="img-fluid" 
      style={{minHeight: '340px', maxHeight: '340px'}}
    />
    </div>
    <hr></hr>
    <div className= "col-lg-12 my-2 mx-2">
      <h5 className="text-secondary">Levis</h5>
      <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
        <div className="d-flex col-lg-12 flex justify-content-between">
        <div>
          <p>2000</p>
        </div>
        <h4 className="d-flex flex justify-content-evenly col-lg-3">
        <FaRegHeart />
        <IoMdCart />
        </h4>
        </div>
  </div> 
</div>   
<div className="d-flex flex-column border col-lg-3 shadow">
<div className="text-center col-lg-12 pt-2">
<img
  src={Vendor_customerSupport}
  className="img-fluid" 
  style={{minHeight: '340px', maxHeight: '340px'}}
/>
</div>
<hr></hr>
<div className= "col-lg-12 my-2 mx-2">
  <h5 className="text-secondary">Levis</h5>
  <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
    <div className="d-flex col-lg-12 flex justify-content-between">
    <div>
      <p>2000</p>
    </div>
    <h4 className="d-flex flex justify-content-evenly col-lg-3">
    <FaRegHeart />
    <IoMdCart />
    </h4>
    </div>
</div> 
</div>   
<div className="d-flex flex-column border col-lg-3 shadow">
<div className="text-center col-lg-12 pt-2">
<img
  src={dubai}
  className="img-fluid" 
  style={{minHeight: '340px', maxHeight: '340px'}}
/>
</div>
<hr></hr>
<div className= "col-lg-12 my-2 mx-2">
  <h5 className="text-secondary">Levis</h5>
  <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
    <div className="d-flex col-lg-12 flex justify-content-between">
    <div>
      <p>2000</p>
    </div>
    <h4 className="d-flex flex justify-content-evenly col-lg-3">
    <FaRegHeart />
    <IoMdCart />
    </h4>
    </div>
</div> 
</div>   
<div className="d-flex flex-column border col-lg-3 shadow">
<div className="text-center col-lg-12 pt-2">
<img
  src={shirt}
  className="img-fluid" 
  style={{minHeight: '340px', maxHeight: '340px'}}
/>
</div>
<hr></hr>
<div className= "col-lg-12 my-2 mx-2">
  <h5 className="text-secondary">Levis</h5>
  <p>Levis is the best of know jeans by of know jeans by of know jeans by </p>
    <div className="d-flex col-lg-12 flex justify-content-between">
    <div>
      <p>2000</p>
    </div>
    <h4 className="d-flex flex justify-content-evenly col-lg-3">
    <FaRegHeart />
    <IoMdCart />
    </h4>
    </div>
</div> 
</div>   

        

      
    
      </div>
    </>
  );
}
