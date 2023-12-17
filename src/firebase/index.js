import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Xn4_wajSXuKAL9uOmODClreEEDw-lvA",
  authDomain: "authentication-e50d8.firebaseapp.com",
  projectId: "authentication-e50d8",
  storageBucket: "authentication-e50d8.appspot.com",
  messagingSenderId: "593587330550",
  appId: "1:593587330550:web:c2450a9aea49672f833bd7",
  measurementId: "G-MX22PTYFEF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }