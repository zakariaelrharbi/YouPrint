import React, { useState } from 'react';
import logo from '../assets/Logo/mainlogoV.png';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Dropdown } from "flowbite-react";

const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const toggleNavbar = () => {
        setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);
    };

    const closeNavbar = () => {
        setOpenNavbar(false);
    };

    const { currentUser } = useSelector((state) => state.user); // Access the user state from Redux
    const user = currentUser?.user; // Access the nested user object

    console.log("Current User:", user);

    return (
        <>
            <div
                onClick={closeNavbar}
                aria-hidden="true"
                className={`fixed bg-black inset-0 z-40 ${openNavbar ? 'flex lg:hidden' : 'hidden'}`}
            />
            <header className="fixed left-0 bg-black text-white top-0 w-full flex items-center h-20 border-b border-b-gray-100 z-40">
                <nav className="relative mx-auto lg:max-w-full w-full px-5 sm:px-10 md:px-[90px] lg:px-[70px] flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <Link to="/">
                            <img src={logo} alt="YouPrint logo" className="h-[180px]" />
                        </Link>
                    </div>
                    <div
                        className={`absolute top-full lg:translate-y-0 lg:opacity-100 left-0 bg-black lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 lg:transition-none ease-linear ${
                            openNavbar
                                ? 'translate-y-0 rotate-0 opacity-100 visible'
                                : 'translate-y-10 -rotate-12 opacity-0 invisible lg:visible lg:rotate-0'
                        }`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-white lg:w-full lg:justify-center">
                            <li>
                                <Link
                                    to={'/'}
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/categories'}
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/sales'}
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                >
                                    Sales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/about'}
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/contact'}
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                            {user ? (
                                <li className="lg:hidden">
                                    <div className="flex items-center gap-3">
                                        <Avatar img={user.profilePicture} rounded={true} />
                                        <span>{user.name}</span>
                                    </div>
                                </li>
                            ) : (
                                <li className="lg:hidden">
                                    <Link
                                        to={'/login'}
                                        className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent"
                                    >
                                        Signin
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link to="/cart" className="relative">
                            <SlBasket className="w-6 h-6" />
                        </Link>
                        {user ? (
                            <div className="hidden lg:flex items-center gap-3">
                                <Avatar img={user.profilePicture} rounded={true} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <Link to="/login" className="hidden lg:block">
                                <button className="bg-primaryGreen text-white py-2 px-4 rounded-md">
                                    Signin
                                </button>
                            </Link>
                        )}
                        <button
                            onClick={toggleNavbar}
                            className="lg:hidden text-white"
                        >
                            {openNavbar ? '✕' : '☰'}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
