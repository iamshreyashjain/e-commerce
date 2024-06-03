import tv from "../../assets/images/tv.avif"
import sugar from "../../assets/images/sugar.avif"
import headphone from "../../assets/images/headphone.avif"
import mobile from "../../assets/images/mobile.jpg"
import Lifestyle from "../../assets/images/Lifestyle.avif"
import fashion from "../../assets/images/fashion.avif"


import "./HP_Categories.css"

//import { GoChevronRight } from "react-icons/go"; 
import { Link } from "react-router-dom"

export default function  HP_Categories(){

  return(
    <>
    <div className="my-5"> </div>
    <div className="d-flex flex flex-row justify-content-between mx-5 my-2">
        <div><h4>Categories</h4></div>
      {/*   <div><button className="btn btn-primary">View More <GoChevronRight /></button></div>*/}
    </div>
    

    <div className="my-1"> </div>
    <div className="d-flex flex flex-row flex-wrap mx-5 p-2 shadow shadow-1">  
     
     
        <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
        <Link to = "" className="text-decoration-none text-dark">
          <div className="text-center ">
            <img src= {sugar} className=" rounded rounded-2 shadow shadow-1  col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
          </div>
          <div className=" text-center mt-3">
            <h6 className="">Grocery</h6>
          </div>
          </Link>
        </div>
        <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
          <div className="text-center ">
            <img src= {fashion} className=" rounded rounded-2 shadow shadow-5  col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
          </div>
          <div className=" text-center mt-3">
            <h6 className="">Fashion</h6>
          </div>
        </div>

        <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
        <div className="text-center ">
          <img src= {tv} className=" rounded rounded-2  col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
        </div>
        <div className=" text-center mt-3">
          <h6 className="">Electronics</h6>
        </div>
      </div>

      <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
        <div className="text-center ">
          <img src= {headphone} className=" rounded rounded-2  col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
        </div>
        <div className=" text-center mt-3">
          <h6 className="">Accessories </h6>
        </div>
      </div>

      <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center ">
        <img src= {mobile} className=" rounded rounded-2 col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
      </div>
      <div className=" text-center mt-3">
        <h6 className="">Mobile</h6>
      </div>
    </div>
      <div className="d-flex flex flex-column col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center ">
        <img src= {Lifestyle} className=" rounded rounded-2  col-lg-10 col-md-10 col-sm-8 col-8" height="120px"/>
      </div>
      <div className=" text-center mt-3">
        <h6 className="">Lifestyle</h6>
      </div>
    </div>

     
        
        
    </div>
    


       
    </>  
  )
}
