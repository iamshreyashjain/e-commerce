import { BsBoxes } from "react-icons/bs";
import {Link} from 'react-router-dom'

import { FaRegAddressCard } from "react-icons/fa";

export default function HP_Address(){
    return(
        <>
        <div className="mt-5 mx-5">
        <h2>Address And Payments</h2>
        </div>
        <div className="d-flex flex gap-1 text-center mt-3 mx-5">
            <div className="col-lg-8 shadow">
                <div>
                    <h3 className="border-bottom border-5 border-primary py-2">Select Address <FaRegAddressCard  className="mb-1"/></h3>
                    <div className="form-check mx-5">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            
                        </label>

                        
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
                Place order <BsBoxes size={22} />
                </button>
                </Link>
          </div>
        </div>
        </div>
        </>       
    )
}