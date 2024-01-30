import React from "react";
import { useState, useEffect } from "react";

import { signOut } from "firebase/auth";
import auth from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import UploadFile from "../components/UploadFile";

const Home = () => {

  const [image, setImage] = useState('/logo.png');

  const navigate = useNavigate();


  useEffect(() => {
    //Implementing the setInterval method
    const interval = setTimeout(() => {
      setImage("/logoAnimation.gif")
    }, 5000);

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      clearInterval(interval)
    };
  }, []);


  const handleLogout = () => {
    console.log(auth.currentUser);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="min-h-screen bg-[#F5DFBB] flex flex-1 flex-col">
      <div className="bg-[#FFD592] rounded-b-3xl w-full h-24 border border-black shadow-xl relative">

        <h1 className="text-3xl font-bold m-3 absolute bottom-0 center-10 flex flex-col"><img className="logo" src={process.env.PUBLIC_URL +image} /></h1>
        <div className="absolute bottom-0 right-10 flex-wrap">
        <button onClick={() => navigate("/login")}>
          <div className="rounded bg-[#F89292] w-20 h-7 border border-black shadow-xl relative">
            <div className="text-black text-center">
            Login
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/signup")}>
          <div className="rounded bg-[#F5DFBB] w-20 h-7 border border-black shadow-xl relative margin-x-0.5">
            <div className="text-black text-center">
              SignUp
            </div>
          </div>
        </button>
        </div>
        <div className="absolute bottom-0 right-10 flex flex-col items-end">
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-lime-100 min-h-100 ">
      
      <h1 className="text-3xl font-bold m-3 center-10 flex flex-col ">The best Source for Reliable AI usage detection.</h1>
      <p className="center-10 flex flex-col m-5">
      How we work:<br></br>

      We will prevent chatgpt usage by unnoticably modifying your word file. If a student copies and pastes your promt, this will cause chatgpt to inject notifying messages into it’s outputed response. <br></br>

      3 Easy Steps:<br></br>
      <p className="indent-2">
      1. Upload word file to be modified<br></br>
      </p>
      <p className="indent-2">
      2. Select wanted chatgpt injection<br></br>
      </p>
      <p className="indent-2">
      3. Download modified file<br></br>
      </p>
      In Built ChatGPT testing 
      </p>
      <a className="w-full text-center font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://devpost.com/software/detectorinjector"> Check us out on DevPost</a>
      </div>
    </div>
  );

};

export default Home;
