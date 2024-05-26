import { Link } from "react-router-dom";
import { FcExpand } from "react-icons/fc";

import './HP_Register.css';

export default function HP_Register(){
    return(
        <>

        <div className="col-lg-4  col-md-4 col-sm-4 col-4 border border-1 shadow shadow-1 rounded rounded-1 mt-5 mb-5 m-auto p-4">
        <form className="m-auto">
        <div className="d-flex flex-row justify-content-between">
        <h2 className="okay">Create Account</h2>
        <div className="mx-4 border border-1 rounded text-danger align-content-center goBack">
        <Link to ="/ecomm/customerlogin"><FcExpand /></Link>
        </div>
        </div>
        
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First and Last Name"/>
          <div id = "emailHelp" className = "form-text"></div>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="940-716-1423"/>
        <div id = "emailHelp" className = "form-text"></div>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nick@gmail.com"/>
      <div id = "emailHelp" className = "form-text"></div>
    </div>

        
        <div className=" mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Choose Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        
      
        <div className="row">
        <div className=" col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
        <Link><button type="button" className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-outline-primary">Register</button></Link>
        </div>
        </div>
        </form>
        </div>
        </>
    )
}