import iphone13 from '../../assets/images/iphone13.jpg';
import shirt from '../../assets/images/shirt.jpg';
import { RiDeleteBin5Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { HiMiniCurrencyRupee } from "react-icons/hi2";

import { RiVisaFill } from "react-icons/ri";
import { IoQrCodeOutline } from "react-icons/io5";

import { FaGooglePay } from "react-icons/fa";


import onePlus from '../../assets/images/onePlus.jpg';


export default function HP_Cart(){
    return(
        <>
        <div className="mt-5 mx-5">
            <h2>My Shopping Cart</h2>
        </div>
        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column mx-5 mt-3 gap-lg-1 gap-4 ">
            <div className='d-flex flex-column col-lg-8  col-md-8 gap-4'>
                <div className="d-flex flex border border shadow" style={{maxHeight: '220px', minHeight: "220px", minWidth: '100px'}}>
                    <div className="d-flex flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4  col-4   border-end border-1"> 
                        <img 
                            src = {iphone13} 
                            style={{maxHeight: '200px', minHeight: "200px", minWidth: '100px'}}
                        />
                    </div>
                    <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-8  p-4">
                        <div className='d-flex flex justify-content-between col-lg-12 col-md-12 col-sm-12 col-12'>
                            <h5 className='overflow-scroll text-break'>iPhone 13</h5>
                            <h5>Rs: 54000</h5>
                        </div>
                        <h6 className='text-secondary fw-normal'>Seller Name : Apple</h6>
                        <h6 className='text-secondary fw-normal'>Ram : 64</h6>
                        <h6 className='text-secondary fw-normal'>Color : Starlight White</h6>
                        <div className='col-lg-12 mt-3 d-flex flex justify-content-between'>
                        <select className="col-lg-2 col-md-2 col-sm-4 col-6  p-2 ">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>        
                            <option value="6">6</option>
                        </select>
                        <button className='btn btn-danger align-content-center px-3 '><RiDeleteBin5Fill size={20} className='mb-1'/></button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
               
                <div className="d-flex flex border border shadow" style={{maxHeight: '220px', minHeight: "220px", minWidth: '100px'}}>
                <div className="d-flex flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4  col-4   border-end border-1"> 
                    <img 
                        src = {shirt} 
                        style={{maxHeight: '200px', minHeight: "200px", minWidth: '100px'}}
                    />
                </div>
                <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-8  p-4">
                    <div className='d-flex flex justify-content-between col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h5 className='overflow-scroll text-break'>iPhone 13 </h5>
                        <h5>Rs: 54000</h5>
                    </div>
                    <h6 className='text-secondary fw-normal'>Seller Name : Fashion LTD</h6>
                    <h6 className='text-secondary fw-normal'>Size : 44</h6>
                    <h6 className='text-secondary fw-normal'>Color : Crimsons</h6>
                    <div className='col-lg-12 d-flex flex justify-content-between'>
                    <select className="col-lg-2 col-md-2 col-sm-4 col-6  p-2 ">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>        
                        <option value="6">6</option>
                    </select>
                    <button className='btn btn-danger align-content-center px-3'><RiDeleteBin5Fill size={20} className='mb-1'/></button>
                    </div>
                </div>
                <div>
                </div>
            </div>

            <div className="d-flex flex border border shadow" style={{maxHeight: '220px', minHeight: "220px", minWidth: '100px'}}>
            <div className="d-flex flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4  col-4   border-end border-1"> 
                <img 
                    src = {onePlus} 
                    style={{maxHeight: '200px', minHeight: "200px", minWidth: '100px'}}
                />
            </div>
            <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-8  p-4">
                <div className='d-flex flex justify-content-between col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h5 className='overflow-scroll text-break'>iPhone 13 </h5>
                    <h5>Rs: 54000</h5>
                </div>
                <h6 className='text-secondary fw-normal'>Seller Name : Fashion LTD</h6>
                <h6 className='text-secondary fw-normal'>Size : 44</h6>
                <h6 className='text-secondary fw-normal'>Color : Crimsons</h6>
                <div className='col-lg-12 d-flex flex justify-content-between'>
                <select className="col-lg-2 col-md-2 col-sm-4 col-6  p-2 ">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>        
                    <option value="6">6</option>
                </select>
                <button className='btn btn-danger align-content-center px-3'><RiDeleteBin5Fill size={20} className='mb-1'/></button>
                </div>
            </div>
            <div>
            </div>
        </div>   
         </div>


            <div className="col-lg-4 col-md-4 shadow border "style={{maxHeight: '400px', minHeight : '400px'}} >
                <h4 className='text-secondary align-self-center px-3 py-2'>Price Details</h4>
                <hr className='mx-2'/>
                <div className='d-flex flex-row justify-content-between px-3'>
                    <p>Total{}</p>
                    <p>54000</p>
                </div>
                   <div className='d-flex flex-row justify-content-between px-3'>
                    <p>Discount{}</p>
                    <p>500</p>
                </div>
                <div className='d-flex flex-row justify-content-between px-3'>
                    <p>Delivery Charge{}</p>
                    <p>50</p>
                </div>
                <hr className='mx-2'/>
                <div className='d-flex flex-row justify-content-between px-3'>
                    <h4 className='text-secondary align-self-center   border-5'>Total Amount</h4>
                    <p>54000</p>
                </div>

                <hr className='mx-2'/>
                <div className='d-flex flex-row justify-content-between px-3'>
                    <h4 className='text-secondary align-self-center   border-5'>Total Savings</h4>
                    <p>500</p>
                </div>
                <div className="d-grid gap-2 mx-2">
                <Link to = "/ecomm/address">
                <button className="btn btn-primary col-lg-12" type="button">
                    Proceed Payment <RiVisaFill size={22}/> <FaGooglePay size={22} /> <IoQrCodeOutline /> <HiMiniCurrencyRupee />



                    </button>
                    </Link>
              </div>
            </div>
        </div>
        </>
    )
}