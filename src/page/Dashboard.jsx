import { useState, useEffect } from "react";
import UploadFile from "../components/UploadFile";
import auth from "../firebase/firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Box = ({ id, title, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`border border-black border-b-0 w-48 h-8 flex justify-center items-center cursor-pointer rounded-sm hover:bg-[#f89292] ${
        selected ? "bg-[#f89292]" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [selectedBox, setSelectedBox] = useState(1);
  const handleClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

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
    <div className="min-h-screen bg-[#F5DFBB] flex flex-1 flex-col">
      <div className="bg-[#FFD592] rounded-b-3xl w-full h-24 border border-black shadow-xl relative">
        <h1 className="text-3xl font-bold m-3">Detector Injector</h1>
        <div className="absolute bottom-0 left-10 flex">
          <Box
            id={1}
            title="Upload PDF"
            selected={selectedBox === 1}
            onClick={handleClick}
          />
          <Box
            id={2}
            title="My Injected PDFs"
            selected={selectedBox === 2}
            onClick={handleClick}
          />
          <Box
            id={3}
            title="About"
            selected={selectedBox === 3}
            onClick={handleClick}
          />
        </div>
        <div className="absolute bottom-0 right-10 flex flex-col items-end">
          <p className="mb-4">
            {auth.currentUser != null
              ? `${auth.currentUser.email}`
              : "Please Sign In"}
          </p>
          <Box
            id={4}
            className=""
            title="Logout"
            selected={selectedBox === 4}
            onClick={handleLogout}
          />
        </div>
      </div>
      <div className="border-box m-10">
        {
          {
            1: <UploadFile />,
            2: <div>My Injected PDFs</div>,
            3: <div>About</div>,
          }[selectedBox]
        }
      </div>
    </div>
  );
}
