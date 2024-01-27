// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVdj4crJC7izx-OJ7JVYs8p9WYuDVviMM",
  authDomain: "detectorinjector.firebaseapp.com",
  projectId: "detectorinjector",
  storageBucket: "detectorinjector.appspot.com",
  messagingSenderId: "26607904664",
  appId: "1:26607904664:web:982d77bf712614901e6ded",
  measurementId: "G-SERTEJY9XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);