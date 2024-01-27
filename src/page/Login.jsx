import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import SignIn from "../components/google-sign-in";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    // <>
    //     <main >
    //         <section>
    //             <div>
    //                 <p> FocusApp </p>

    //                 <form>
    //                     <div>
    //                         <label htmlFor="email-address">
    //                             Email address
    //                         </label>
    //                         <input
    //                             id="email-address"
    //                             name="email"
    //                             type="email"
    //                             required
    //                             placeholder="Email address"
    //                             onChange={(e)=>setEmail(e.target.value)}
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="password">
    //                             Password
    //                         </label>
    //                         <input
    //                             id="password"
    //                             name="password"
    //                             type="password"
    //                             required
    //                             placeholder="Password"
    //                             onChange={(e)=>setPassword(e.target.value)}
    //                         />
    //                     </div>

    //                     <div>
    //                         <button
    //                             onClick={onLogin}
    //                         >
    //                             Login
    //                         </button>
    //                     </div>
    //                 </form>

    //                 <p className="text-sm text-white text-center">
    //                     No account yet? {' '}
    //                     <NavLink to="/signup">
    //                         Sign up
    //                     </NavLink>
    //                 </p>
    //                   <SignIn />
    //             </div>
    //         </section>
    //     </main>
    // </>
    <div className="flex flex-1 min-h-screen">
      <div className="w-1/2">
        {/* Time to add stuff for login form */}
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <div class="bg-white shadow-md rounded px-8 py-8 max-w-md w-full">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        </div>
        <div class="mb-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
        </div>
        <div>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
        </div>
    </div>
        </div>
      </div>
      <div className="w-1/2 bg-black"></div>
    </div>
  );
};

export default Login;