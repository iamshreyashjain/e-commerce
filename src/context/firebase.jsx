// FirebaseProvider.js

import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set as dbSet } from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcl8KK_dCqc577DfCc5H_J35DjujJwCgM",
  authDomain: "ecommconnect-1008abc.firebaseapp.com",
  projectId: "ecommconnect-1008abc",
  storageBucket: "ecommconnect-1008abc.appspot.com",
  messagingSenderId: "976916503507",
  appId: "1:976916503507:web:4f37794c007e2ff7eb2d26",
  databaseURL: "https://ecommconnect-1008abc-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, firestore, database, storage };

// Firebase Context
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error);
      return null;
    }
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in:", error);
      return null;
    }
  };

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const putData = (key, data) => {
    dbSet(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        signupUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        logout,
        putData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
