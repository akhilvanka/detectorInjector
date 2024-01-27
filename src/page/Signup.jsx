import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";
import SignIn from "../components/google-sign-in";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    // <main >
    //     <section>
    //         <div>
    //             <div>
    //                 <h1> FocusApp </h1>
    //                 <form>
    //                     <div>
    //                         <label htmlFor="email-address">
    //                             Email address
    //                         </label>
    //                         <input
    //                             type="email"
    //                             label="Email address"
    //                             value={email}
    //                             onChange={(e) => setEmail(e.target.value)}
    //                             required
    //                             placeholder="Email address"
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="password">
    //                             Password
    //                         </label>
    //                         <input
    //                             type="password"
    //                             label="Create password"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)}
    //                             required
    //                             placeholder="Password"
    //                         />
    //                     </div>

    //                     <button
    //                         type="submit"
    //                         onClick={onSubmit}
    //                     >
    //                         Sign up
    //                     </button>

    //                 </form>

    //                 <p>
    //                     Already have an account?{' '}
    //                     <NavLink to="/login" >
    //                         Sign in
    //                     </NavLink>
    //                 </p>
    //                 <SignIn />
    //             </div>
    //         </div>
    //     </section>
    // </main>
    <main class="bg-[#F5DFBB] min-h-screen flex items-center justify-center p-8 md:p-0">
      <div class="bg-[#FFD592] shadow-sm flex flex-col items-center rounded-md overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">
        <div class="p-8 lg:w-1/2 sm:p-8">
          <h1 class="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">
            Lets get started! 
          </h1>

          <h2 class="text-2xl font-semibold mt-8 mb-3 text-gray-700">Login</h2>
          <SignIn />

          <form action="" class="flex flex-col">
            <div id="input-field" class="flex flex-col mb-4 relative">
              <i class="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
              <label for="email" class="mb-2 text-gray-700">
                Your email
              </label>
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div id="input-field" class="flex flex-col relative">
              <i class="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
              <label for="Password" class="mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
              />
            </div>

            <button class="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md">
              Register
            </button>
          </form>

          <p class="text-gray-500">
            Have an account?{" "}
            <a href="/login" class="text-blue-500 font-semibold underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
