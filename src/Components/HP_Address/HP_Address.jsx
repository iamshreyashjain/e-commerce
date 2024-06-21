import { useState } from 'react';
import { BsBoxes } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaRegAddressCard } from "react-icons/fa";

export default function HP_Address() {
    const [stage, setStage] = useState(true);
    const [addresses, setAddresses] = useState([
        "Flat no 709, Muskan Plaza Shahtbdipuram, MR4 Vijay Nagar Jabalpur, PinCode: 482002"
    ]);
    const [newAddress, setNewAddress] = useState("");
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleAddAddress = () => {
        setStage(false);
    }

    const handleSaveAddress = () => {
        if (newAddress.length !== 0) {
            setAddresses([...addresses, newAddress]);
            setNewAddress("");
            setStage(true);
        }
    }

    const handleChange = (event) => {
        setNewAddress(event.target.value);
    }

    return (
        <>
            <div className="mt-5 mx-5">
                <h2 className="border-bottom border-2 border-primary py-2">Address And Payments</h2>
            </div>
            <div className="d-flex flex gap-1 mt-4 mx-5">
                <div className="d-flex flex-column gap-5 col-lg-8">
                    <div className="d-flex py-3 flex-column col-lg-12 shadow">
                        <h3 className="border-bottom border-5 border-primary py-2 mx-3">Select Address <FaRegAddressCard className="mb-1" /></h3>
                        {addresses.map((address, index) => (
                            <div key={index} className="form-check mx-5 mt-4 bg-primary-subtle py-3 rounded rounded-end-5">
                                <input 
                                    className="form-check-input mx-2" 
                                    type="radio" 
                                    name="address" 
                                    id={`address${index}`} 
                                    checked={selectedAddress === index}
                                    onChange={() => setSelectedAddress(index)}
                                />
                                <label className="form-check-label" htmlFor={`address${index}`}>
                                    <i>Address: {address}</i>
                                </label>
                            </div>
                        ))}
                        {stage ? (
                            <div className="d-flex flex col-lg-12 justify-content-end my-3 px-5">
                                <button className="btn btn-outline-primary" onClick={handleAddAddress}>Add Address</button>
                            </div>
                        ) : (
                            <div className="d-flex flex-column mx-5 mt-4">
                                <textarea
                                    className="form-control"
                                    value={newAddress}
                                    onChange={handleChange}
                                    placeholder="Enter new address"
                                    rows="3"
                                />
                                <div className="d-flex flex justify-content-end my-3 gap-1">
                                    <button className="btn btn-outline-primary" onClick={handleSaveAddress}>Save Address</button>
                                    <button className="btn btn-outline-primary" onClick={()=>setStage(true)}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="d-flex py-3 flex-column col-lg-12 shadow">
                        <h3 className="border-bottom border-5 border-primary py-2 mx-3">Select Payment</h3>
                        <div className="form-check mx-5 mt-4 bg-primary-subtle py-3 rounded rounded-end-5">
                            <input 
                                className="form-check-input mx-2" 
                                type="radio" 
                                name="payment" 
                                id="payment1" 
                                checked={selectedPayment === 'Payment Method 1'}
                                onChange={() => setSelectedPayment('Payment Method 1')}
                            />
                            <label className="form-check-label" htmlFor="payment1">
                                Payment Method 1
                            </label>
                        </div>
                        <div className="form-check mx-5 mt-4 bg-primary-subtle py-3 rounded rounded-end-5">
                            <input 
                                className="form-check-input mx-2" 
                                type="radio" 
                                name="payment" 
                                id="payment2" 
                                checked={selectedPayment === 'Payment Method 2'}
                                onChange={() => setSelectedPayment('Payment Method 2')}
                            />
                            <label className="form-check-label" htmlFor="payment2">
                                Payment Method 2
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 shadow border" style={{ maxHeight: '400px', minHeight: '400px' }}>
                    <h4 className='text-secondary align-self-center px-3 py-2'>Price Details</h4>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Total</p>
                        <p>54000</p>
                    </div>
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Discount</p>
                        <p>500</p>
                    </div>
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Delivery Charge</p>
                        <p>50</p>
                    </div>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <h4 className='text-secondary align-self-center border-5'>Total Amount</h4>
                        <p>53550</p>
                    </div>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <h4 className='text-secondary align-self-center border-5'>Total Savings</h4>
                        <p>500</p>
                    </div>
                    <div className='d-grid gap-2 mx-2'>
                        <Link to="/ecomm/address">
                            <button className="btn btn-primary col-lg-12" type="button">
                                Place order <BsBoxes size={22} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
