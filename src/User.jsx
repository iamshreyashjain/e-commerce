import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "./context/firebase"
export default function User() {
  const auth = getAuth(app);
  
  const [use, setUse] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("loggedIn");
        setUse(user);
      } else {
        console.log("logged out");
        setUse(user);
      }
    });
  }, []);
  return (
    <>
      {use === null ? (
        <></>
      ) : (
        <>
          <div className="d-flex flex gap-3 mx-5 mt-5">
            <h3  className= "border-bottom border-primary border-3 lh-2 flex-fill">Welcome, {use.email.slice(0, 1).toUpperCase()}{use.email.slice(1,4)}</h3>
            </div>
        </>
      )}
    </>
  );
}
