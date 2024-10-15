import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

export default function HP_Payment() {
  const navigate = useNavigate();

  const { productId } = useParams();

  useEffect(() => {
    console.log('Fetching product details for payment:', productId);
  }, [productId]);

  // Implement your payment form and logic here

  const handlePayment = () => {
    console.log('Processing payment for product:', productId);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>
      <p>Implement your payment form here...</p>
      <button className="btn btn-primary" onClick={handlePayment}>
        Proceed to Payment
      </button>
    </div>
  );
}
