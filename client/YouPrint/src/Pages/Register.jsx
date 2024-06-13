// Import the TermsModal component here
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'sonner'
import GOGOauth from '../components/GOGOauth';
import ReCAPTCHA from "react-google-recaptcha";
import { TermsModal } from '../components/TermsModal';

const Register = () => {
    const [termsModalOpen, setTermsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [capValue, setCapValue] = useState(null);
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
            [name]: value.trim(),
        }));
    };

    const handleTermsClose = () => {
        setTermsModalOpen(false);
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

        if (dataRes.success) {
            toast.success(dataRes.message);
            setTimeout(() => {
                navigate('/login');
            }, 1500);  
        } else if (dataRes.error) {
            toast.error(dataRes.message);
        }
    };

    return (
        <div>
            <div className="font-[sans-serif] text-[#333] mt-24 mb-4 p-4 relative">
                <div className="max-w-md w-full mx-auto relative z-30">
                    <div className="border border-gray-300 bg-white rounded-md p-8">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-extrabold">Créez votre compte</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm mb-1 block">Identifiant<span className='text-red-500'> *</span></label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="username"
                                            type="text"
                                            value={data.username}
                                            onChange={handleOnChange}
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
                                            placeholder="Nom complet"
                                        />
                                        <FaUserAlt className="w-4 h-4 absolute right-4" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm mb-1 block">E-mail<span className='text-red-500'> *</span></label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="email"
                                            type="email"
                                            value={data.email}
                                            onChange={handleOnChange}
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
                                            placeholder="nom@gmail.com"
                                        />
                                        <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm mb-1 block">Mot de passe<span className='text-red-500'> *</span></label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            onChange={handleOnChange}
                                            value={data.password}
                                            type={showPassword ? "text" : "password"}
                                            className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen"
                                            placeholder="********"
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
                                        J'accepte les{" "}
                                        <Link
                                            onClick={(e) => {setTermsModalOpen(true); e.preventDefault();}}
                                            className="text-primaryGreen font-semibold hover:underline ml-1"
                                        >
                                        Conditions de service
                                        </Link>
                                    </label>
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LcFRPUpAAAAALq44ZPeUzr6E0AMxpDhxac_1ejE"
                                    onChange={(val)=> setCapValue(val)}
                                />
                            </div>
                            <div className="!mt-5">
                                <button
                                    type="submit"
                                    disabled={!termsAccepted || !capValue}
                                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primaryGreen hover:scale-105 focus:outline-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    S'inscrire
                                </button>
                                <GOGOauth />
                            </div>
                            <p className="text-sm mt-6 text-center">
                                Vous avez un compte ?{" "}
                                <Link to="/login" className="text-primaryGreen font-semibold hover:underline ml-1">
                                    Se connecter
                                </Link>
                            </p>
                        </form>
                        <TermsModal  visible={termsModalOpen} onClose={handleTermsClose}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
