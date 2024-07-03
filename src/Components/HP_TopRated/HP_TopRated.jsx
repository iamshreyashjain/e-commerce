import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useProducts } from '../../context/ProductContext';
import './HP_TopRated.css'
export default function HP_TopRated() {
  const { products } = useProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex-row justify-content-between mx-2 my-1 p-2">
        <div><h4>Top Rated Products</h4></div>
        <div><button className="btn btn-primary">View More <GoChevronRight /></button></div>
      </div>

      <div className="d-flex flex-row justify-content-evenly overflow-auto mx-2 shadow shadow-1 gap-3 px-3">
        {Object.keys(products).slice(0, 4).map(category => (
          products[category].map(product => (
            <div className="col-lg col-md-4 col-sm-6 col-6 my-3" key={product.id}>
              <div className="border rounded p-3 d-flex flex-column align-items-center thumbnailContainer">
                <Link to={`/${category}/${product.id}`} className="text-decoration-none text-dark">
                  <img
                    src={product.images[0]} // Assuming first image of first variant
                    alt={product.name}
                    className="img-fluid mb-3 imgContainer"
                  />
                  <div className="text-center">
                    <h6>{product.brand}</h6>
                    <p>{product.name}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ))}
      </div>
    </>
  );
}
