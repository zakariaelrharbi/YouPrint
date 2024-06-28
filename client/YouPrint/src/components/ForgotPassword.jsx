import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { MdOutlineMailOutline } from "react-icons/md";
import { Modal } from "flowbite-react";

const ForgotPassword = ({ visible, onClose }) => {
  const [data, setData] = useState({
    email: '',
  });

  const emailInputRef = useRef(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/forget-password', {
        method: 'POST',
        crossDomain: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          "access-control-allow-origin": "*",
        },
        body: JSON.stringify({
          email: data.email.trim(),
        }),
      });

      if (response.ok) {
        toast.success('Password reset email sent successfully');
      } else {
        toast.error('Failed to send password reset email');
      }
    } catch (error) {
      toast.error('An error occurred while resetting the password');
      console.error("Error during fetch:", error); // Debug log
    }
  };

  if (!visible) return null;

  return (
    <div className=''>
      <Modal show={visible} onClose={onClose} initialFocus={emailInputRef}>
        <Modal.Header>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Réinitialiser le mot de passe</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm mb-2 block">E-mail<span className='text-red-500'> *</span></label>
                  <div className="relative flex items-center">
                  <input
                  name="email"
                  type="email"
                  value={data.email}
                  required=""
                  onChange={handleChange}
                  className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                  placeholder="nom@gmail.com"
                  ref={emailInputRef}
                  />
                  <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
                  </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primaryGreen hover:opacity-90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Réinitialiser le mot de passe
              </button>
            </form>
          </div>  
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ForgotPassword;




// <div className=''>
    //   <Modal show={visible} onClose={onClose} className='pt-[250px] xl:pt-0'>
    //     <Modal.Header className='mb-0'>
    //       Réinitialiser le mot de passe
    //     </Modal.Header>
    //     <Modal.Body>
    //       <div className=''>
          // <form onSubmit={handleSubmit} className="space-y-6 flex gap-3">
          //   <div className='xl:w-[200px]'>
          //     <label className="text-sm mb-1 block">Votre e-mail<span className='text-red-500'> *</span></label>
          //     <div className="relative flex items-center">
          //       <input
          //         name="email"
          //         type="text"
          //         value={data.email}
          //         onChange={handleChange}
          //         className="bg-white border border-gray-300 w-[230px] text-sm px-2 py-2 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
          //         placeholder="nom@gmail.com"
          //       />
          //       <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
          //     </div>
          //   </div>
          // </form>
            // <button
            //   type="submit"
            //   className='px-2 py-1 text-sm font-semibold rounded text-white bg-primaryGreen hover:opacity-90 focus:outline-none'
            // >
            //   Se connecter
            // </button>
    //       </div>
    //     </Modal.Body>
    //   </Modal>
