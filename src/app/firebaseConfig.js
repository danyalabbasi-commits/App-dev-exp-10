import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCK7lpgYNC-v3xKP10uQKH-d78qHrQDH0g",
  authDomain: "exp-10-6c82c.firebaseapp.com",
  projectId: "exp-10-6c82c",
  storageBucket: "exp-10-6c82c.firebasestorage.app",
  messagingSenderId: "101783904320",
  appId: "1:101783904320:web:9443a3dd0f554ac768eca5",
  measurementId: "G-NNRDTXVSTB"
};

// Initialize Firebase without Analytics (fixes window is not defined error)
export const app = initializeApp(firebaseConfig);