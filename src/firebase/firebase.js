// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence, browserLocalPersistence, applyActionCode } from "firebase/auth";
// import { }
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCVdj4crJC7izx-OJ7JVYs8p9WYuDVviMM",
//   authDomain: "detectorinjector.firebaseapp.com",
//   projectId: "detectorinjector",
//   storageBucket: "detectorinjector.appspot.com",
//   messagingSenderId: "26607904664",
//   appId: "1:26607904664:web:982d77bf712614901e6ded",
//   measurementId: "G-SERTEJY9XZ"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });


export default auth;
// export default auth;
export const db = getFirestore(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);