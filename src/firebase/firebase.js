import firebase from "firebase"; // this name is used in line 19

const firebaseConfig = {
  apiKey: "AIzaSyDRw8cNOZcROESjeeFGhFiD0_hzPivdILs",
  authDomain: "work-force-a7e80.firebaseapp.com",
  projectId: "work-force-a7e80",
  storageBucket: "work-force-a7e80.appspot.com",
  messagingSenderId: "48531118393",
  appId: "1:48531118393:web:b2e3bab7827670937030e8",
};

const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();
export const firestore = app.firestore();

export default app;
