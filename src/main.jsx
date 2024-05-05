import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCarDVBgWkqzZc67DGR2m7w_R-bc9A1Yb0",
  authDomain: "amai-store.firebaseapp.com",
  projectId: "amai-store",
  storageBucket: "amai-store.appspot.com",
  messagingSenderId: "629980635720",
  appId: "1:629980635720:web:ef6dc13efe93e8d6b86e7d",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
