import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleOnChange = (e) => {
    const { name, value } = e.target

        setData((prevData) => {
          return {
            ...prevData,
            [name]: value,
          }
        })
    }
    console.log("data",data);


     const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
      <div className="font-[sans-serif] text-[#333] mt-28 p-4 relative">
        <div className="max-w-md w-full mx-auto relative z-30">
            <div className="border border-gray-300 bg-white rounded-md p-8">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-6 text-center">
                <h3 className="text-2xl font-extrabold">Log in to your account</h3>
                </div>
                <div className="space-y-6">
                <div>
                    <label className="text-sm mb-2 block">Email</label>
                    <div className="relative flex items-center">
                    <input
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleOnChange}
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen "
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
                        onChange={handleOnChange}
                        value={data.password}
                        type={showPassword ? "text" : "password"}
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
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


                <div class="flex items-center justify-between gap-4">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-primaryGreen focus:ring-primaryGreen border-gray-300 rounded" />
                <label for="remember-me" class="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" class="text-sm text-primaryGreen hover:opacity-90">
                  Forgot Password?
                </a>
              </div>
            </div>


                </div>
                <div className="!mt-10">
                <button
                    type="button"
                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primaryGreen hover:opacity-90 focus:outline-none"
                >
                    Login
                </button>
                </div>
                <p className="text-sm mt-6 text-center">
                Don't have an account?{" "}
                <Link to="/register" 
                    className="text-primaryGreen font-semibold hover:underline ml-1"
                >
                    Register here
                </Link>
                </p>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Login;
