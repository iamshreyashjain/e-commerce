import { Link } from "react-router-dom";
import { FcExpand } from "react-icons/fc";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../context/firebase.jsx";
import { useNavigate } from "react-router-dom";


import "./HP_Register.css";
import { useState } from "react";

import { useFirebase } from "../../context/firebase.jsx";

export default function HP_Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const firebase = useFirebase();

  const registerUser = () =>{
    firebase.signupUserWithEmailAndPassword(email, password)
    navigate('/')
    setEmail('')
    setPassword('')
  }
  
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 col-10 border border-1 shadow shadow-1 rounded rounded-1 mt-5 mb-5 m-auto p-4">
        <form className="m-auto">
          <div className="d-flex flex-row justify-content-between">
            <h2 className="okay">Create Account</h2>
            <div className="mx-4 border border-1 rounded text-danger align-content-center goBack">
              <Link to="/customerlogin">
                <FcExpand />
              </Link>
            </div>
          </div>

         

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>(setEmail(e.target.value))}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nick@gmail.com"
              required = {true}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className=" mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter Password
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required = {true}
            />
          </div>

          <div className="row">
            <div className=" col-lg-12 col-md-12 col-sm-12 col-12 mt-2">
              <Link>
                <button
                  type="button"
                  className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-outline-primary"
                  onClick={registerUser} 
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
