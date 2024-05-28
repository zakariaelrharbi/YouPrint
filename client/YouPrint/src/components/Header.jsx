import React, { useState } from 'react';
import logo from '../assets/Logo/mainlogoV.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);
  };

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  return (
    <>
      <div
        onClick={closeNavbar}
        aria-hidden="true"
        className={`fixed bg-black inset-0 z-30 ${openNavbar ? 'flex lg:hidden' : 'hidden'}`}
      />
      <header className="fixed left-0 bg-black text-white  top-0 w-full flex items-center h-20 border-b border-b-gray-100 z-40">
        <nav className="relative mx-auto lg:max-w-full w-full px-5 sm:px-10 md:px-[90px] lg:px-[70px] flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link>
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
                  className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primaryGreen"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primaryGreen"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primaryGreen"
                >
                  Sales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primaryGreen"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative py-2.5 duration-300 ease-linear hover:text-primaryGreen after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-primaryGreen"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <div className="hidden lg:flex lg:items-center">
                <a href="#" className="relative text-white px-1.5">
                  <span className="sr-only">cart</span>
                  <span className="absolute top-0 right-0 bg-primaryGreen w-2 h-2 rounded-full" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                    </svg>
                </a>
              </div>
              <Link
                to={'/login'}
                className="px-5 py-2.5 rounded-md font-semibold text-white flex justify-center border border-primaryGreen duration-300 ease-linear hover:bg-primaryGreen hover:text-black"
              >
                Signin
              </Link>
              <Link to={'/register'}
                href="#"
                className="px-5 py-2.5 rounded-md font-semibold bg-primaryGreen text-white flex justify-center duration-300 ease-linear hover:bg-opacity-80"
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden gap-x-4">
            <div className="flex items-center gap-x-4 lg:hidden">
              <a href="#" className="relative text-white px-1.5">
                <span className="sr-only">cart</span>
                <span className="absolute top-0 right-0 bg-emerald-600 w2 h-2 rounded-full" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </a>
              <div className="flex">
                <button
                  onClick={toggleNavbar}
                  aria-label="Toggle navbar"
                  className="outline-none border-l border-l-emerald-100 pl-3 relative py-3 flex flex-col gap-1.5"
                >
                  <span
                    aria-hidden="true"
                    className={`h-0.5 w-6 rounded bg-white transition duration-300 ${
                      openNavbar ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`h-0.5 w-6 rounded bg-white transition duration-300 ${
                      openNavbar ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
