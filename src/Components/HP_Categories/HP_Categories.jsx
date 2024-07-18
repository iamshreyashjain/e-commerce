import { Link } from 'react-router-dom';
import "./HP_Categories.css";

export default function HP_Categories() {
  const categories = [
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?t=st=1719866554~exp=1719870154~hmac=b177e506c98cf1fd953b1065e376d646567d4152cf18159c6a13e2dce3e68065&w=1800',
      caption: 'Electronics'
    },
    {
      image: 'https://img.freepik.com/free-photo/beautiful-men-fashion-wooden-background_74190-2613.jpg?t=st=1719866794~exp=1719870394~hmac=ca73b5555d80104d3dec71e091b7ef0d4998deb56fa81b01778bfc58cb161dda&w=1480',
      caption: 'Accessories'
    },
    {
      image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1719866889~exp=1719870489~hmac=86b97473c922781e6e928599844950c5af6d891e5d0779b34b5699f8c51b1e86&w=1480',
      caption: 'Sports'
    },
    {
      image: 'https://img.freepik.com/free-photo/high-angle-group-childrens_23-2148445714.jpg?t=st=1719867015~exp=1719870615~hmac=c429d473f34801ceb7d8b1033e6349d478b780133406dd61b26f4f078ebd177c&w=1480',
      caption: 'Kids'
    },
    {
      image: 'https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg?t=st=1719867060~exp=1719870660~hmac=fb2bd41a11d2530d6f5b2d7d002e14e4a1850d2f5eab1532025802b7e2e7ab34&w=1480',
      caption: 'Lifestyle'
    },
    // Add more categories as needed
  ];

  return (
    <>
      <div className="my-5"></div>
      <div className="d-flex flex-row justify-content-between mx-2">
        <div><h4>Categories</h4></div>
      </div>

      <div className="my-1"></div>
      <div className="d-flex flex-row justify-content-between flex-wrap p-2 shadow shadow-1 mx-2">
        {categories.map((category, index) => (
          <div className="d-flex flex-column mb-3 col-lg-2 col-md-2 col-sm-4 col-12 " key={index}>
            <Link to="" className="text-decoration-none text-dark">
              <div className="catImg-container">
                <img 
                  src={category.image} 
                  alt={category.caption} 
                  className="object-fit-fill rounded rounded-3 col-lg-10 col-md-10 col-sm-10 col-8 mx-auto" 
                  height="120px"
                  
                />
              </div>
              <div className="text-center mt-3">
                <h6>{category.caption}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
