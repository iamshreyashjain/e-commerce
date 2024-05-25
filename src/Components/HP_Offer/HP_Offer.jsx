import fiftyPercentOff from "../../assets/images/50.png"
import fourtyPercentOff from "../../assets/images/40.png"
import thirtyPercentOff from "../../assets/images/30.png"
import twentyPercentOff from "../../assets/images/20.png"
import tenPercentOff from "../../assets/images/10.png"
import Store99 from "../../assets/images/99.png"

//import { GoChevronRight } from "react-icons/go";


export default function  HP_Offer(){

  return(
    <>
    <div className="my-5"> </div>
    <div className="d-flex flex flex-row justify-content-between mx-5">
        <div><h4>Discount Store</h4></div>
      {/* <div><button className="btn btn-primary">View More <GoChevronRight />    </button></div>*/}
    </div>
    

    <div className="my-1"> </div>
    <div className="d-flex flex flex-row flex-wrap mx-5 py-3  shadow shadow-1">  

      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
          <div className="text-center">
            <img src= {fiftyPercentOff} className=" rounded rounded-2  shadow shaodw-1 col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
          </div>
          <div className=" text-center mt-3">
         
          </div>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center">
        <img src= {fourtyPercentOff} className=" rounded rounded-2 shadow shaodw-1  col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
      </div>
      <div className=" text-center mt-3">
      
      </div>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center">
        <img src= {thirtyPercentOff} className=" rounded rounded-2 shadow shaodw-1 col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
      </div>
      <div className=" text-center mt-3">
      
      </div>
      </div>


      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center">
        <img src= {twentyPercentOff} className="rounded rounded-2 shadow shaodw-1 col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
      </div>
      <div className=" text-center mt-3">
      
      </div>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center">
        <img src= {tenPercentOff} className="rounded rounded-2 shadow shaodw-1  col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
      </div>
      <div className=" text-center mt-3">
     
      </div>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
      <div className="text-center">
        <img src= {Store99} className=" rounded rounded-2 shadow shadow-1 col-lg-8 col-md-6 col-sm-8 col-8" height="100px"/>
      </div>
      <div className=" text-center mt-3">
       
      </div>
      </div>

      
    </div>
     


      
       
    </>  
  )
}
