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
        navigate("/dash");
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
      <div className="w-full bg-yellow-200">
        {/* Time to add stuff for login form */}
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <form>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button onClick={onLogin}>Login</button>
            </div>
          </form>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;