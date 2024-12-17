import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="background"
        />
      </div>
      <form className="bg-black bg-opacity-70 absolute w-3/12 mx-auto right-0 left-0 mt-28 h-[450px] rounded-lg">
        <h1 className="font-bold text-left text-white text-3xl ml-3 mt-9 mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 ml-3 my-2 w-11/12 h-12 bg-slate-700 bg-opacity-50 border border-white rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 ml-3 my-2 w-11/12 h-12 bg-slate-700 bg-opacity-50 border border-white rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 mx-3 my-2 w-11/12 h-12  bg-slate-700 bg-opacity-50 border border-white rounded-lg"
        />
        <button className="px-2 mx-3 my-2 w-11/12 h-12 bg-red-600 text-white rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-4 mx-3 font-normal cursor-pointer"
          onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered. Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
