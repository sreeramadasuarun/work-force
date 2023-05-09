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
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const collectRef = collection(database, "users");
  // const q = query(collectRef, where(id, "==", user.uid));
  // console.log(user.uid);
  const handleSubmit = (
    fullname,
    companyName,
    companyAddress,
    skill,
    permanentAddress,
    about
  ) => {
    try {
      const docRef = setDoc(doc(collectRef, user.uid), {
        fullname: fullname,
        companyName: companyName,
        companyAddress: companyAddress,
        skill: skill,
        permanentAddress: permanentAddress,
        about: about,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // const [show, setShow] = useState("");

  // const getData = () => {
  //   const docRef = doc(database, "users", user.uid);

  //   getDocs(docRef).then((response) => {
  //     console.log(
  //       response.docs.map((item) => {
  //         return { ...item.data(), id: item.id };
  //       })
  //     );
  //   });
  // };

  // // console.log(user.uid);
  // useEffect(() => {
  //   getData();
  // }, []);

  const [show, setShow] = useState("");

  async function getData() {
    const docRef = doc(database, "users");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setShow(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1500);
    return () => clearInterval(interval);
  }, [getData]);

  // .................................
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
      // console.log("Auth", currentuser);

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
