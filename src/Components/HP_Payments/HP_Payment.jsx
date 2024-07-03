import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HP_Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { productId } = state;

  useEffect(() => {
    // Implement logic to fetch product details based on productId if needed
    console.log('Fetching product details for payment:', productId);
  }, [productId]);

  // Implement your payment form and logic here

  const handlePayment = () => {
    // Implement payment processing logic
    console.log('Processing payment for product:', productId);
    // Redirect to order confirmation page or home page after payment
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
