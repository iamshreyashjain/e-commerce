
import { Link } from "react-router-dom"


export default function VP_LoginPage(){
    return(
        <>
        <div className="col-lg-4  col-md-4 col-sm-4 col-4  my-5 border border-1 rounded rounded-2 shadow shadow-2  m-auto  p-4" >
        <form>


        <div className="mb-3">
        <h2>Login</h2>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id = "emailHelp" className = "form-text"> We will never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <div className="row">
        <div className=" col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
        <Link><button type="button" className="col-lg-12 gy-md-12 col-sm-12 col-12 btn btn-outline-primary">Login</button></Link>
        <Link to ="/vendor/loginotp"><button type="button" className="my-3 col-lg-12 gy-md-12 col-sm-12 col-12 btn btn-primary">Login using Link</button></Link>
        </div>
        </div>
        </form>
        </div>
      
        </>
    )
}
