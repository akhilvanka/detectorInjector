import React from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import UploadFile from "../components/UploadFile";

const Home = () => {
  const navigate = useNavigate();

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
    <>
      <nav>
        {
            auth.currentUser != null ? <p>Welcome Home {auth.currentUser.email}</p> : <p>Please Sign In</p>   
        }
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
