// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOHliGYFDfdGEmECd8sZqVjNSS5yqab1M",
    authDomain: "dragon-news-react-projec-73fd3.firebaseapp.com",
    projectId: "dragon-news-react-projec-73fd3",
    storageBucket: "dragon-news-react-projec-73fd3.appspot.com",
    messagingSenderId: "399428444337",
    appId: "1:399428444337:web:a137acabe98c0e142b0290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;