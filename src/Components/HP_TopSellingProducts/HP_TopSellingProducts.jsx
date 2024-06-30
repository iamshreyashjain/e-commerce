
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useProducts } from '../../context/ProductContext';

export default function HP_TopSellingProducts() {
  const { products } = useProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="d-flex flex-row justify-content-between mx-5 my-1 p-2">
        <div><h4>Top Selling Products</h4></div>
        <div><button className="btn btn-primary">View More <GoChevronRight /></button></div>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-evenly mx-5 shadow shadow-1">
        {Object.keys(products).map(category => (
          products[category].map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={product.id}>
              <div className="border rounded p-3">
              <Link to={`/${category}/${product.id}`} className="text-decoration-none text-dark">

                  <img
                    src={product.images} // Assuming first image of first variant
                    alt={product.name}
                    className="img-fluid mb-3"
                    style={{ maxHeight: "200px" }}
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
