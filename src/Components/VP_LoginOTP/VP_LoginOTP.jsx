import { useState } from "react"
import { FcExpand } from "react-icons/fc";
import { Link } from "react-router-dom";

function LoginOTP(){
  const [phrase, setPhrase] = useState("Send Login Link")
  let handleclick =(e)=>{
    e.preventDefault();
    setPhrase("Link Sent")
  }

    return(
        <>
        <div className="col-lg-4  col-md-4 col-sm-4 col-4 flex mt-4 mb-4  m-auto  p-4" style={{border: '1px solid gainsboro', borderRadius: '5px'}}>

        <form className="m-auto">

        <div className="d-flex flex-row justify-content-between">
        <h2 className="okay">Create Account</h2>
        <div className="mx-4 border border-1 rounded text-danger align-content-center goBack">
        <Link to ="/vendor/login"><FcExpand /></Link>
        </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id = "emailHelp" className = "form-text"> Check your email after sending Link.</div>
        </div>
      
        
        <div style={{display: 'flex', justifyContent:'space-evenly', gap: '10px'}}> 
        <button onClick={handleclick} style={{width: '100%'}} type="submit" className="btn btn-primary">{phrase}</button>
        
        </div>
        </form>
        </div>
        </>
    )
}
export default LoginOTP