import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import './HP_Offer.css';

export default function HP_Offer() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();
      const listRef = ref(storage, 'offers'); // Path to your folder in Firebase Storage
      const response = await listAll(listRef);
      const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
      const offersData = urls.map(url => ({ image: url }));
      setOffers(offersData);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="my-5"></div>
      <div className="d-flex flex-row justify-content-between mx-2">
        <div><h4>Offers</h4></div>
      </div>

      <div className="my-1"></div>
      <div className="d-flex flex-row justify-content-between gap-3 flex-wrap p-2 shadow shadow-1 mx-2 offSkeleton">
        {offers.map((category, index) => (
          <div className="d-flex flex-column mb-3 col-lg-2 col-md-2 col-sm-4 col-12" key={index}>
            <Link to="" className="text-decoration-none text-dark">
              <div className="offImg-container">
                <img 
                  src={category.image} 
                  alt={`Offer ${index}`}
                  className="object-fit-fill rounded rounded-2 col-lg-10 col-md-10 col-sm-10 col-6 mx-auto" 
                  height="120px"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
