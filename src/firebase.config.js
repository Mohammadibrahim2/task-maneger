// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Ni2r4w4CKt4n7Z7kZHPhDErcJdbQKGE",
  authDomain: "task-management-2bcd4.firebaseapp.com",
  projectId: "task-management-2bcd4",
  storageBucket: "task-management-2bcd4.appspot.com",
  messagingSenderId: "533490873353",
  appId: "1:533490873353:web:f11b1da9840657e63c34d8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;