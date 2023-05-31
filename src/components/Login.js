import React from "react";
import logo from "../logo.png"

export default function Login() {
  return (
    <div className="h-[90%] w-[50%] self-center px-4 relative group">
      <div className="flex justify-center mb-[-5px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="h-[60%] p-6 m-auto bg-white lg:max-w-xl">
        <div className="text-3xl font-semibold text-center text-green-700 "> 
          <span className="text-black">Welcome</span>  Back
        </div>
        <p className="text-sm text-gray-600 flex justify-center ">
            Glad to see you, Again!
          </p>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md  focus:outline-none "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
              
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <p className="text-xs text-gray-600 flex justify-end">
            Forget Password?
          </p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black shadow-2xl rounded-md">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <span href="#" className="font-medium text-green-600 ">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
