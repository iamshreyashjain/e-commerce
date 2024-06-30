  import { createContext, useContext, useState, useEffect } from "react";
  import { initializeApp } from "firebase/app";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
  import { getDatabase, set, ref } from "firebase/database";
  import { getStorage } from "firebase/storage";
  import { getFirestore } from "firebase/firestore";

  // Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyDcl8KK_dCqc577DfCc5H_J35DjujJwCgM",
    authDomain: "ecommconnect-1008abc.firebaseapp.com",
    projectId: "ecommconnect-1008abc",
    storageBucket: "ecommconnect-1008abc.appspot.com",
    messagingSenderId: "976916503507",
    appId: "1:976916503507:web:4f37794c007e2ff7eb2d26",
    databaseURL : "https://ecommconnect-1008abc-default-rtdb.firebaseio.com",
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  const firebaseAuth = getAuth(app);
  const database = getDatabase(app);
  const storage = getStorage(app);
  const firestore = getFirestore(app);

  export {storage, firestore};

  const FirebaseContext = createContext(null);

  export const useFirebase = () => useContext(FirebaseContext);

  export const FirebaseProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
        setCurrentUser(user);
      });
      return () => unsubscribe();
    }, []);

    const signupUserWithEmailAndPassword = (email, password) => {
      return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signInUserWithEmailAndPassword = (email, password) => {
      return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signInWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(firebaseAuth, googleProvider);
    };

    const logout = () => {
      return signOut(firebaseAuth);
    };

    const putData = (key, data) => set(ref(database, key), data);

    return (
      <FirebaseContext.Provider value={{ 
        currentUser, 
        signupUserWithEmailAndPassword, 
        signInUserWithEmailAndPassword, 
        signInWithGoogle, 
        logout, 
        putData 
      }}>
        {props.children}
      </FirebaseContext.Provider>
    );
  };
