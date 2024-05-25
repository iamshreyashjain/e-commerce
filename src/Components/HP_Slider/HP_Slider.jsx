import BannerOne from "../../assets/images/BannerOne.jpg"
import BannerTwo from "../../assets/images/BannerTwo.jpg"
import BannerThree from "../../assets/images/BannerThree.jpg" 
import BannerFour from "../../assets/images/BannerFour.jpg"
import BannerFive from "../../assets/images/BannerFive.jpg"
import BannerSix from "../../assets/images/BannerSix.jpg"

import "./HP_Slider.css"

export default function HP_Slider(){
    const banners = [BannerOne, BannerTwo, BannerThree , BannerFour, BannerFive, BannerSix];
    return(
      <div className="m-5">
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((data, index) => (
              <div key={index}>
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={data} className="d-block w-100" />
              </div>
              </div>
            ))}
          </div>
  
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }