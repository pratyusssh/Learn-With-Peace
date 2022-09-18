import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiOcLqzh4b_o4cUgRg4vJHCCtBnTWSwvo",
  authDomain: "learn-with-peace-75071.firebaseapp.com",
  projectId: "learn-with-peace-75071",
  storageBucket: "learn-with-peace-75071.appspot.com",
  messagingSenderId: "798581152266",
  appId: "1:798581152266:web:ad4197f699724ec1e85df3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
