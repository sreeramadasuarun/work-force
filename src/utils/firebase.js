import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRw8cNOZcROESjeeFGhFiD0_hzPivdILs",
  authDomain: "work-force-a7e80.firebaseapp.com",
  projectId: "work-force-a7e80",
  storageBucket: "work-force-a7e80.appspot.com",
  messagingSenderId: "48531118393",
  appId: "1:48531118393:web:b2e3bab7827670937030e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
