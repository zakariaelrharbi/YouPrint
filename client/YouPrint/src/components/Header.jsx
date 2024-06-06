import React, { useState } from 'react'; // Import React and the useState hook for state management
import logo from '../assets/Logo/mainlogoV.png'; // Import the logo image
import { SlBasket } from "react-icons/sl"; // Import the basket icon from react-icons
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux to access the Redux store
import { Avatar, Dropdown } from "flowbite-react"; // Import Avatar and Dropdown components from flowbite-react

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false); // State to manage the visibility of the navbar

  const toggleNavbar = () => {
    setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar); // Function to toggle the navbar visibility
  };

  const closeNavbar = () => {
    setOpenNavbar(false); // Function to close the navbar
  };

  const { currentUser } = useSelector((state) => state.user); // Access the currentUser from the Redux store
  const user = currentUser?.user; // Access the nested user object if it exists

  return (
    <>
      <div
        onClick={closeNavbar}
        aria-hidden="true"
        className={`fixed bg-black inset-0 z-40 ${openNavbar ? 'flex lg:hidden' : 'hidden'}`} // Overlay to close the navbar on click
      />
      {/*  Header styling and layout */}
      <header className="fixed left-0 bg-black text-white top-0 w-full flex items-center h-20 border-b border-b-gray-100 z-40"> 
      {/*  Navbar styling and layout */}
        <nav className="relative mx-auto lg:max-w-full w-full px-5 sm:px-10 md:px-[90px] lg:px-[70px] flex gap-x-5 justify-between items-center"> 
          {/*  Container for the logo */}
          <div className="flex items-center min-w-max"> 
           {/* Link to the homepage */}
            <Link to="/"> 
            {/* Logo image */}
              <img src={logo} alt="YouPrint logo" className="h-[180px]" /> 
            </Link>
          </div>
          <div
            className={`absolute top-full lg:translate-y-0 lg:opacity-100 left-0 bg-black lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 lg:transition-none ease-linear
             ${
              openNavbar
                ? 'translate-y-0 rotate-0 opacity-100 visible'
                : 'translate-y-10 -rotate-12 opacity-0 invisible lg:visible lg:rotate-0'
            }`} // Navbar dropdown menu styling and transitions
          >
            {/*  List of navigation links */}
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
                {user ? (
                          <li className="">
                          </li>
                              ) : (
                                  <li className="lg:hidden">
                                      <Link
                                    to={'/login'}
                                    className="relative px-60  lg:px-6 py-2.5 rounded-md font-semibold text-white duration-300 ease-linear after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent border border-primaryGreen hover:bg-primaryGreen
                                    hover:text-black"
                                >
                                    Signin
                                </Link>

                                  </li>
                              )}
            </ul>
             {/*  Container for additional elements like cart and user profile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              {/* Container for cart icon and user profile on large screens */}
              <div className="hidden lg:flex lg:items-center"> 
                {!user && ( 
                  <Link
                    to={'/login'}
                    className="relative px-6 py-2.5 rounded-md font-semibold text-white duration-300 ease-linear after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-0 hover:after:scale-100 bg-transparent border border-primaryGreen hover:bg-primaryGreen
                    hover:text-black"
                  >
                    Signin
                  </Link>
                )}
                {/* Cart link */}
                <a href="#" className="relative text-white px-1.5 ml-4"> 
                 {/* Screen reader text for cart */}
                  <span className="sr-only">cart</span> 
                   {/*  Notification dot on the cart icon */}
                  <span className="absolute -top-2 right-0 bg-primaryGreen w-2 h-2 mr-4 rounded-full" />
                  {/* Basket icon */}
                  <SlBasket className='w-6 h-6 mr-4' /> 
                </a>
                {user && ( // Check if user is logged in
                  <Dropdown 
                    arrowIcon={false} 
                    inline
                    label={
                      <Avatar
                        alt='user'
                        img={user.profilePicture}
                        rounded
                      />
                    } // Dropdown menu with user avatar as the label
                  >
                    <Dropdown.Header>
                       {/* Display the username */}
                      <span className="block text-sm">@{user.username}</span> 
                      {/*  Display the email */}
                      <span className="block text-xs font-medium truncate">{user.email}</span> 
                    </Dropdown.Header>
                    <Link to="/dashboard?tab=profile" className="block text-sm">
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                )}
              </div>
            </div>
          </div>
          
          {/*  Container for cart icon and user profile on small screens */}
          <div className="flex items-center lg:hidden gap-x-4"> 
            {/* Container for cart icon and user profile on small screens */}
            <div className="flex items-center gap-x-4 lg:hidden">
               {/*  Cart link */}
              <a href="#" className="relative text-white px-1.5">
                {/* Screen reader text for cart */}
                <span className="sr-only">cart</span> 
                {/* Notification dot on the cart icon */}
                <span className="absolute -top-2 right-0 bg-primaryGreen w-2 h-2  rounded-full" /> 
                 {/* Basket icon */}
                <SlBasket className='w-6 h-6' /> 
              </a>
              {user && ( // Check if user is logged in
                <Dropdown 
                  arrowIcon={false} 
                  inline
                  label={
                    <Avatar
                      alt='user'
                      img={user.profilePicture}
                      rounded
                    />
                  } // Dropdown menu with user avatar as the label
                >
                  <Dropdown.Header>
                    {/* Display the username */}
                    <span className="block text-sm">@{user.username}</span> 
                    {/*  Display the email */}
                    <span className="block text-xs font-medium  truncate">{user.email}</span> 
                  </Dropdown.Header>
                  <Link to="/dashboard?tab=profile" className="block text-sm">
                      <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              )}
              {/* Container for navbar toggle button */}
              <div className="flex"> 
                <button
                  onClick={toggleNavbar}
                  aria-label="Toggle navbar"
                  className="outline-none border-l border-l-emerald-100 pl-3 relative py-3 flex flex-col gap-1.5" // Toggle button styling and layout
                >
                  <span
                    aria-hidden="true"
                    className={`h-0.5 w-6 rounded bg-white transition duration-300 ${
                      openNavbar ? 'rotate-45 translate-y-1.5' : ''
                    }`} // First line of the toggle button, rotates to form 'X' when navbar is open
                  />
                  <span
                    aria-hidden="true"
                    className={`h-0.5 w-6 rounded bg-white transition duration-300 ${
                      openNavbar ? '-rotate-45 -translate-y-1.5' : ''
                    }`} // Second line of the toggle button, rotates to form 'X' when navbar is open
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

export default Header; // Export the Header component as default
