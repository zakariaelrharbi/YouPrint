import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'sonner'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.Register.url, {
            method: SummaryApi.Register.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const dataRes = await dataResponse.json();
        console.log(dataRes);

      
    if (dataRes.success) {
        toast.success(dataRes.message);
        setTimeout(() => {
            navigate('/login');
        }, 1500);  // Adjust the delay time (2000 ms = 2 seconds) as needed
    } else if (dataRes.error) {
        toast.error(dataRes.message);
    }
    };

    return (
        <div>
            <div className="font-[sans-serif] text-[#333] mt-28 p-4 relative">
                <div className="max-w-md w-full mx-auto relative z-30">
                    <div className="border border-gray-300 bg-white rounded-md p-8">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-extrabold">Create an account</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm mb-2 block">Username</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="username"
                                            type="text"
                                            value={data.username}
                                            onChange={handleOnChange}
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
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
                                            value={data.email}
                                            onChange={handleOnChange}
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
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
                                        {showPassword ? (
                                            <FaRegEyeSlash onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                                        ) : (
                                            <FaRegEye onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        onChange={(e)=> setTermsAccepted(e.target.checked)}
                                        className="h-4 w-4 shrink-0 text-primaryGreen focus:ring-primaryGreen border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                                        I accept the{" "}
                                        <a
                                            href="#"
                                            className="text-primaryGreen font-semibold hover:underline ml-1"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div className="!mt-10">
                                <button
                                    type="submit"
                                    disabled={!termsAccepted}
                                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primaryGreen hover:scale-105 focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Create an account
                                </button>
                            </div>
                            <p className="text-sm mt-6 text-center">
                                Already have an account?{" "}
                                <Link to="/login" className="text-primaryGreen font-semibold hover:underline ml-1">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
