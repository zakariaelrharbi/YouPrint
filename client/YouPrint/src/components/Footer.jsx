import React from 'react'
import logo from '../assets/Logo/mainlogoV.png'; 
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
     <footer className="bg-black p-10 font-[sans-serif] tracking-wide">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="lg:flex lg:items-center">
      <Link to='/'>
        <img src={logo} alt="YouPrint logo" className="h-[180px]  " />
      </Link>
    </div>
    <div className="lg:flex lg:items-center">
      <ul className="flex space-x-6">
        <li>
          <Link to=''>
            <FaFacebook className="fill-gray-300 hover:fill-[#039BE5] w-6 h-6"/>
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaInstagram className="fill-gray-300 hover:fill-[#e1306c] w-6 h-6"/>
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaWhatsapp className="fill-gray-300 hover:fill-[#40C351] w-6 h-6"/>
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Contactez-nous</h4>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            E-mail
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            Téléphone
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            Addresse
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Informations</h4>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            À propos de nous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            Termes et conditions
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-primaryGreen text-sm"
          >
            Politique de confidentialité
          </a>
        </li>
      </ul>
    </div>
  </div>
  <p className="text-gray-300 text-sm mt-10">
    © {new Date().getFullYear()}
    <a
      href="#"
      target="_blank"
      className="hover:underline mx-1"
    >
      You<span className='text-primaryGreen'>Print</span>
    </a>
    All Rights Reserved.
  </p>
</footer>


    </div>
  )
}

export default Footer
