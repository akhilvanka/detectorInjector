import { signInWithGooglePopup } from "../firebase/firebase";
import { NavLink, useNavigate } from 'react-router-dom'
import React, {useState} from 'react';

const SignIn = () => {
    const navigate = useNavigate();
  const logGoogleUser = async () => {
    signInWithGooglePopup()
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
    // console.log(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};
export default SignIn;
