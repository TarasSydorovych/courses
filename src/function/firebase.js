import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAuth, listUsers } from "firebase/auth";
import { OAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyDLerD0Vr_yA7ZNK0zYd1g1xbo-hzezpRg",
  authDomain: "newtonapples-bc52e.firebaseapp.com",
  projectId: "newtonapples-bc52e",
  storageBucket: "newtonapples-bc52e.appspot.com",
  messagingSenderId: "235812485732",
  appId: "1:235812485732:web:62e573422eeed4cb70fd71",
  measurementId: "G-MWS349WSNZ",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
const analytics = getAnalytics(app);
