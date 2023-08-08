import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJLzMa_-gx9asRvTOivxxTRBJX6cz-VvY",
  authDomain: "house-marketplace-app-2023.firebaseapp.com",
  projectId: "house-marketplace-app-2023",
  storageBucket: "house-marketplace-app-2023.appspot.com",
  messagingSenderId: "115794744853",
  appId: "1:115794744853:web:2e48045cfba096fe03e01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()