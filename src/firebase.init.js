// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLUUizxnVw_O6vUobRFtXmCaqFc7yPZ4",
  authDomain: "softvenc-tasko.firebaseapp.com",
  projectId: "softvenc-tasko",
  storageBucket: "softvenc-tasko.firebasestorage.app",
  messagingSenderId: "108992657368",
  appId: "1:108992657368:web:087dca0111b94b359864ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth