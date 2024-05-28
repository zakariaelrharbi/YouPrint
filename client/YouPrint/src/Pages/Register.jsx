import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";


import logo from '../assets/Logo/mainlogoV.png'; 
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>
        <div className="font-[sans-serif] text-[#333] mt-28 p-4 relative">
        <div className="max-w-md w-full mx-auto relative z-50">
            <div className="border border-gray-300 bg-white rounded-md p-8">
            <form className="w-full">
                <div className="mb-6 text-center">
                <h3 className="text-2xl font-extrabold">Create an account</h3>
                </div>
                <div className="space-y-6">
                <div>
                    <label className="text-sm mb-2 block">username</label>
                    <div className="relative flex items-center">
                    <input
                        name="name"
                        type="text"
                        required=""
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                        placeholder="Enter username"
                    />
                    <FaUserAlt className="w-4 h-4 absolute right-4" />
                    </div>
                </div>
                <div>
                    <label className="text-sm mb-2 block">Email</label>
                    <div className="relative flex items-center">
                    <input
                        name="email"
                        type="email"
                        required=""
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                        placeholder="Enter email"
                    />
                    <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
                    </div>
                </div>
                <div>
                    <label className="text-sm mb-2 block">Password</label>
                    <div className="relative flex items-center">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                        placeholder="Enter password"
                    />
                    {
                        showPassword ? (
                            <FaRegEyeSlash onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer"/>
                        ) : (
                            <FaRegEye onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer"/>
                        )
                    }
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                        href="javascript:void(0);"
                        className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                        Terms and Conditions
                    </a>
                    </label>
                </div>
                </div>
                <div className="!mt-10">
                <button
                    type="button"
                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                    Create an account
                </button>
                </div>
                <p className="text-sm mt-6 text-center">
                Already have an account?{" "}
                <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                >
                    Login here
                </a>
                </p>
            </form>
            </div>
        </div>
        <img
            src="https://readymadeui.com/bg-effect.svg"
            className="absolute inset-0 w-full h-full z-0 opacity-40"
        />
        </div>

    </div>
  )
}

export default Register
