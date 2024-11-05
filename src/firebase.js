// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7n36tPOvME2Bfx310Ycui5LjmJBSo3eM",
  authDomain: "codetribe-marketplace-f3d42.firebaseapp.com",
  projectId: "codetribe-marketplace-f3d42",
  storageBucket: "codetribe-marketplace-f3d42.firebasestorage.app",
  messagingSenderId: "470328248690",
  appId: "1:470328248690:web:421c6401389397a9f835eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the app and auth instances for use in other files
export { app, auth };
