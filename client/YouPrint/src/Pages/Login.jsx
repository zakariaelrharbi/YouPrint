import React, { useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import SummaryApi from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import GOGOauth from '../components/GOGOauth';
import ForgotPassword from '../components/ForgotPassword';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleForgotPasswordClose = () => {
        setShowForgotPassword(false);
    };
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value.trim(),
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!data.email || !data.password) {
            dispatch(signInFailure("Please fill in all fields"));
            toast.error("Please fill in all fields");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(data.email)) {
            dispatch(signInFailure("Please enter a valid email address"));
            toast.error("Please enter a valid email address");
            return;
        }

        try {
            dispatch(signInStart());
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
                dispatch(signInSuccess(dataRes));
                toast.success(dataRes.message);
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } else {
                dispatch(signInFailure(dataRes.message));
                toast.error(dataRes.message);
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
            toast.error(error.message);
        }
    }

    return (
        <div className="font-[sans-serif] text-[#333] mt-24 p-4 relative mb-4">
            <div className="max-w-md w-full mx-auto relative z-30">
                <div className="border border-gray-300 bg-white rounded-md p-8">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-6 text-center">
                            <h3 className="text-2xl font-extrabold">Connectez-vous</h3>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label className="text-sm mb-2 block">E-mail<span className='text-red-500'> *</span></label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        onChange={handleOnChange}
                                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                                        placeholder="nom@gmail.com"
                                    />
                                    <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Mot de passe<span className='text-red-500'> *</span></label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        onChange={handleOnChange}
                                        value={data.password}
                                        type={showPassword ? "text" : "password"}
                                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                                        placeholder="********"
                                    />
                                    {showPassword ? (
                                        <FaRegEyeSlash onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                                    ) : (
                                        <FaRegEye onClick={togglePasswordVisibility} className="w-4 h-4 absolute right-4 cursor-pointer" />
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <Link href="#"
                                    onClick={(e) => {setShowForgotPassword(true); e.preventDefault();}}
                                     className="text-sm text-primaryGreen underline hover:opacity-90">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="!mt-10">
                            <button
                                type="submit"
                                className='w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primaryGreen hover:opacity-90 focus:outline-none'
                            >
                               Se connecter
                            </button>
                            <GOGOauth/>
                        </div>
                        <p className="text-sm mt-6 text-center">
                           Vous n'avez pas de compte ?{" "}
                            <Link to="/register" className="text-primaryGreen font-semibold hover:underline ml-1">
                                S'inscrire
                            </Link>
                        </p>
                    </form>
                    <ForgotPassword visible={showForgotPassword} onClose={handleForgotPasswordClose} />
                </div>
            </div>
        </div>
    );
}

export default Login;
