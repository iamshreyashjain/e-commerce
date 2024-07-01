import "./HP_Slider.css"

export default function HP_Slider(){
    const banners = [
'https://img.freepik.com/free-vector/vibrant-color-black-friday-festive-sale-banner-with-50-off_1017-40612.jpg?t=st=1719866309~exp=1719869909~hmac=aac26fa03b912876a302d8e92a1fd031fcc3d28b84b9aaea6e63dae5412b3991&w=1800',
'https://img.freepik.com/premium-vector/happy-diwali-hindu-festival-banner-diya-with-creative-design_30996-1313.jpg?w=1800',
'https://img.freepik.com/free-vector/bright-geometrical-black-friday-sale-banner-design-vector_1055-9127.jpg?t=st=1719866384~exp=1719869984~hmac=0c444362e81db4a2880c78d092598655d78f6411a3e9a29ab25006d8f9224395&w=1800',
'https://img.freepik.com/free-vector/happy-diwali-sale-offer-banner-with-artistic-diya-vector_1017-40482.jpg?t=st=1719866424~exp=1719870024~hmac=5d0649f3f5f11bfaa4a388d92d3dee943f85e97dd09c5aae017ba91d86d8c3e5&w=1800',
'https://img.freepik.com/free-vector/raksha-bandhan-festival-sale-discount-banner_1017-19712.jpg?t=st=1719866520~exp=1719870120~hmac=ecf38b8f32785cf2ee728bbdc5fa4851176c49eef6b87fa9117b2b0b32d52fc0&w=1800'

    ];
    return(
      <div className="my-5 mx-2">
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((data, index) => (
              <div key={index}>
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={data} className="d-block w-100" height={220}/>
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