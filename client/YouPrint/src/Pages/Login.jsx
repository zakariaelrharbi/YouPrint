import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import SummaryApi from '../common';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

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


     const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.Login.url, {
            method: SummaryApi.Login.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const dataRes = await dataResponse.json();

        if (dataRes.success) {
            toast.success(dataRes.message);
            setTimeout(() => {
                navigate('/');
            }, 1500);  // Adjust the delay time (2000 ms = 2 seconds) as needed
        } else if (dataRes.error) {
            toast.error(dataRes.message);
        }
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


               <div className="flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-primaryGreen focus:ring-primaryGreen border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="text-sm text-primaryGreen hover:opacity-90">
                    Forgot Password?
                  </a>
                </div>
              </div>



                </div>
                <div className="!mt-10">
                <button
                    type="submit"
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
