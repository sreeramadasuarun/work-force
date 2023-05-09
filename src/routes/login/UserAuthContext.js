import { createContext, useContext, useEffect, useState } from "react";
import {
  // signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, database } from "../../utils/firebase";
import { collection, addDoc, setDoc, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Await } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const collectRef = collection(database, "users");

  const handleSubmit = () => {
    try {
      const docRef = setDoc(doc(collectRef, "SF"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [show, setShow] = useState("");

  const getData = () => {
    getDocs(collectRef).then((response) => {
      const getnow = response.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setShow({ ...getnow });
      console.log(getnow);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // .................................

  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        show,
        // // getdatanow,
        // getData,
        handleSubmit,
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
