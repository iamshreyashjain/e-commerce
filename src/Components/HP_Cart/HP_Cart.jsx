import { useState } from 'react';
import { RiDeleteBin5Fill, RiVisaFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { IoQrCodeOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

import { FaGooglePay } from "react-icons/fa";
import iphone13 from '../../assets/images/iphone13.jpg';

export default function HP_Cart() {
    const initialProducts = [
        {
            id: 1,
            img: iphone13,
            amount: 54000,
            name: 'iPhone 13',
            sellerName: "Apple Inc",
            ram: '64GB',
            color: 'Starlight White'
        }
    ];

    const [productsInCart, setProductsInCart] = useState(initialProducts);
    
    const totalAmount = productsInCart.reduce((total, product) => total + product.amount, 0);
    const discount = 500;
    const deliveryCharge = 50;
    const finalAmount = totalAmount - discount + deliveryCharge;

    const handleDelete = (id) => {
        setProductsInCart(productsInCart.filter(product => product.id !== id));
    }

    let quantity = [1, 2, 3, 4, 5, 6];

    return (
        <>
        {productsInCart.length === 0 ?
            <>
            <div className="mt-5  text-center">
            <h2 className= " border-bottom border-2 border-primary py-2 mx-5">Please add Products in your Cart</h2> 
            <div className='d-flex flex justify-content-center col-lg-12 mt-3'>
            <div className='col-lg-4'>
            <Link to = "/ecomm">
            <button className='btn btn-outline-primary mx-2'>HomePage</button>
            </Link>
            <Link to="/ecomm/wishlist">
            <button className='btn btn-primary'>Go to Wishlist</button>
            </Link>
            </div>
            </div>
            </div>
             </>
            :  
            <>
            <div className="mt-5 mx-5">
                <h2 className= " border-bottom border-2 border-primary py-2" >My Shopping Cart <BsCart3/> </h2>
            </div>
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column mx-5 mt-4 gap-lg-1 gap-4">
                <div className='d-flex flex-column col-lg-8 col-md-8 gap-4'>
                    {productsInCart.map((product) => (
                        <div key={product.id} className="d-flex flex border border shadow" style={{ maxHeight: '220px', minHeight: "220px", minWidth: '100px' }}>
                            <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4 col-4 border-end border-1">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{ maxHeight: '200px', minHeight: "200px", minWidth: '100px' }}
                                />
                            </div>
                            <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-8 p-4">
                                <div className='d-flex justify-content-between col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <h5 className='overflow-scroll text-break'>{product.name}</h5>
                                    <h5>Rs: {product.amount}</h5>
                                </div>
                                <h6 className='text-secondary fw-normal'>Seller Name: {product.sellerName}</h6>
                                <h6 className='text-secondary fw-normal'>Ram: {product.ram}</h6>
                                <h6 className='text-secondary fw-normal'>Color: {product.color}</h6>
                                <div className='col-lg-12 mt-3 d-flex justify-content-between'>
                                    <select className="col-lg-2 col-md-2 col-sm-4 col-6 p-2">
                                        {quantity.map((q) => (
                                            <option key={q} value={q}>{q}</option>
                                        ))}
                                    </select>
                                    <button className='btn btn-danger align-content-center px-3' onClick={() => handleDelete(product.id)}>
                                        <RiDeleteBin5Fill size={20} className='mb-1' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4 col-md-4 shadow border" style={{ maxHeight: '400px', minHeight: '400px' }}>
                    <h4 className='text-secondary align-self-center px-3 py-2'>Price Details</h4>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Total</p>
                        <p>{totalAmount}</p>
                    </div>
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Discount</p>
                        <p>{discount}</p>
                    </div>
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <p>Delivery Charge</p>
                        <p>{deliveryCharge}</p>
                    </div>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <h4 className='text-secondary align-self-center border-5'>Total Amount</h4>
                        <p>{finalAmount}</p>
                    </div>
                    <hr className='mx-2' />
                    <div className='d-flex flex-row justify-content-between px-3'>
                        <h4 className='text-secondary align-self-center border-5'>Total Savings</h4>
                        <p>{discount}</p>
                    </div>
                    <div className="d-grid gap-2 mx-2">
                        <Link to="/ecomm/address">
                            <button className="btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12" type="button">
                                Proceed Payment <RiVisaFill size={22} /> <FaGooglePay size={22} /> <IoQrCodeOutline /> <HiMiniCurrencyRupee />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
</>}
        </>
    );
}
