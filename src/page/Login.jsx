import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
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
    //  <div className="flex flex-1 min-h-screen">
    //   <div className="w-full bg-[#F5DFBB]">
    //     {/* Time to add stuff for login form */}
    //     <div className="h-screen flex flex-col items-center justify-center">
    //       <h1 className="text-4xl font-bold m-5">Welcome Back!</h1>
    //       <form>
    //         <div>
    //           <label htmlFor="email-address">Email address</label>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             required
    //             placeholder="Email address"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             required
    //             placeholder="Password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>

    //         <div>
    //           <button onClick={onLogin}>Login</button>
    //         </div>
    //       </form>
    //       <SignIn />
    //     </div>
    //   </div>
    // </div>
    <main className="bg-[#F5DFBB] min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className=" justify-evenly	bg-[#FFD592] shadow-sm flex flex-col items-center rounded-md overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">
        <div className="p-8 lg:w-1/2 sm:p-8">
          <h1 className="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">
            Welcome Back!
          </h1>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">Login</h2>
          <SignIn />

          <form action="" class="flex flex-col">
            <div id="input-field" class="flex flex-col mb-4 relative">
              <i class="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
              <label for="email" class="mb-2 text-gray-700">
                Your email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div id="input-field" class="flex flex-col relative">
              <i class="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
              <label for="Password" class="mb-2 text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
              />
            </div>

            <button className="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md" onClick={onLogin}>
              Login
            </button>
          </form>

          <p className="text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 font-semibold underline">
              Sign up
            </a>
          </p>
        </div>
        <img className="w-2/5" src={process.env.PUBLIC_URL +"/logoAnimationForever.gif"} />
      </div>
      
    </main>
  );
};

export default Login;
