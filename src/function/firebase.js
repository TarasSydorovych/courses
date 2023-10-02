import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAuth, listUsers } from 'firebase/auth';
import { OAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export const firebaseConfig = {
	apiKey: 'AIzaSyBl_MK3gaUBDXMtfhXzt8GbVJgHuHcQld8',
	authDomain: 'rentautoukraine.firebaseapp.com',
	projectId: 'rentautoukraine',
	storageBucket: 'rentautoukraine.appspot.com',
	messagingSenderId: '1047055660096',
	appId: '1:1047055660096:web:27be73abdf2816fec05ba5',
	measurementId: 'G-RLPR88GSXP',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
const analytics = getAnalytics(app);
