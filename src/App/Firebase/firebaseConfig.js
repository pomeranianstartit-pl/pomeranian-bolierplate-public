// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_NOT_SECRET_KEY,
  authDomain: process.env.REACT_APP_NOT_SECRET_DOMAIN,
  projectId: process.env.REACT_APP_NOT_SECRET_PROJECTID,
  storageBucket: process.env.REACT_APP_NOT_SECRET_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_NOT_SECRET_MESSAGING,
  appId: process.env.REACT_APP_NOT_SECRET_APPID,
  measurementId: process.env.REACT_APP_NOT_SECRET_MEASUREMENT,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
