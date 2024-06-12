import iphone13 from "../../assets/images/iphone13.jpg";
import camera from "../../assets/images/nikon.jpg";
import speaker from "../../assets/images/boseSystem.jpg";
import watch from "../../assets/images/appleWatch.jpg";
import lcd from "../../assets/images/lcd.jpg";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HP_TopSellingProducts() {
  const topProducts = [
    {
      img: iphone13,
      brand: "Apple",
      name: "iPhone 13"
    },
    {
      img: camera,
      brand: "Nikon",
      name: "Nikon Camera"
    },
    {
      img: speaker,
      brand: "Bose",
      name: "Bose Speaker"
    },
    {
      img: watch,
      brand: "Apple",
      name: "Apple Watch"
    },
    {
      img: lcd,
      brand: "Samsung",
      name: "Samsung LCD"
    },

    
    
  
    
  ];

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex flex-row justify-content-between mx-5 my-1 p-2">
        <div><h4>Top Selling Products</h4></div>
        <div><button className="btn btn-primary">View More <GoChevronRight /></button></div>
      </div>

      <div className="d-flex flex flex-row overflow-auto mx-5 shadow shadow-1">
        {topProducts.map((data, index) => (
          <div className="col-lg col-md-3 col-sm-4 col-4  m-3" key={index}>
            <div className="d-flex flex flex-column  border border-1 rounded rounded-2 align-items-center" style={{minHeight:"320px"}}>
            <Link to= "/ecomm/product/iphone13" className="text-decoration-none text-dark">
              <img
                src={data.img}
                alt={data.name}
                className="p-2"
                width="100%"
                height="220px"
              />
              <div className="text-center my-1">
                <h6>{data.brand}</h6>
                <p>{data.name}</p>
              </div>
              </Link> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
