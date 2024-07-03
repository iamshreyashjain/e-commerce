import { Link, useNavigate } from "react-router-dom";
import "./HP_Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./../../context/firebase";
import { FaGoogle } from "react-icons/fa";

const googleProvider = new GoogleAuthProvider();

export default function HP_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('Register / Sign In With Google')
  const navigate = useNavigate();  // Use the useNavigate hook

  const auth = getAuth(app);

  const signInUser = (event) => {
    
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log('done');
        console.log(value);
        navigate('/');  // Navigate to the homepage
      })
      .catch((err) => console.log(err));

    setEmail('');
    setPassword('');
  }

  const signUpWithGoogle = (event) => {
    setText('Redirecting...')
    event.preventDefault();
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('Google sign-in successful', user, token);
        navigate('/');  // Navigate to the homepage
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('Google sign-in error', errorCode, errorMessage, email, credential);
      });
  }

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 col-10 border border-1 shadow shadow-1 rounded rounded-1 my-5 m-auto p-4">
        <form className="m-auto">
          <div className="d-flex flex-row justify-content-between">
            <h2 className="okay">Login</h2>
          </div>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Link to="/forgot-password" className="form-text">
              Forgot Password?
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <button
                type="button"
                className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-outline-primary mt-3"
                onClick={signInUser}
              >
                Login
              </button>
              <hr />
              <p className="text-secondary">New to family? Register here</p>
              <Link to="/customer/registration">
                <button
                  type="button"
                  className="col-lg-12 col-md-12 col-sm-12 col-12 btn btn-primary mt-2"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <button onClick={signUpWithGoogle} className="btn btn-outline-primary col-12">
             {text} <FaGoogle className="mb-1" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
