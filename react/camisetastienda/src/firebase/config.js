// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPcJcXatZXP-B6VsmCuc_dWVJn-V6JQKc",
  authDomain: "camisetas-tienda.firebaseapp.com",
  projectId: "camisetas-tienda",
  storageBucket: "camisetas-tienda.appspot.com",
  messagingSenderId: "575991594195",
  appId: "1:575991594195:web:07a7cf8a081ed73e8d6826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
