import { Link } from "react-router-dom";


import './HP_Login.css';


export default function HP_Login(){
    return(
        <>
        <div className="col-lg-4  col-md-4 col-sm-4 col-4 border border-1 shadow shadow-1 rounded rounded-1 my-5 m-auto p-4">
        <form className="m-auto">
        <div className="d-flex flex-row justify-content-between">
          <h2 className="okay">Login</h2>

        </div>
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id = "emailHelp" className = "form-text"> We will never share your email with anyone else.</div>
        </div>
        
        <div className=" mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
          <Link to =""  className = "form-text">Forgot Password?</Link>
        </div>
        
      
        <div className="row">
        <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
        <Link><button type="button" className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-outline-primary mt-3">Login</button></Link>
        <hr/>
        <p className="text-secondary">New to family? Register here </p>
        <Link to="/customer/registration"> <button type="button" className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-primary mt-2">Register</button></Link>
        </div>
        </div>
        </form>
        </div>
        </>
    )
}