import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE6fuKqOXa-KgDa73V5CVpwZC4uk2eI3A",
  authDomain: "ecommerce-frontend-629d2.firebaseapp.com",
  projectId: "ecommerce-frontend-629d2",
  storageBucket: "ecommerce-frontend-629d2.firebasestorage.app",
  messagingSenderId: "638903516020",
  appId: "1:638903516020:web:7e16b98600763b7c858a21",
  measurementId: "G-L3ZJK7KWNN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);