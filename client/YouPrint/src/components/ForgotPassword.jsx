import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import { MdOutlineMailOutline } from "react-icons/md";


const ForgotPassword = ({ visible, onClose }) => {
  const [data, setData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
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
      
    } catch (error) {
      toast.error('An error occurred while resetting the password');
      console.error("Error during fetch:", error); // Debug log
    }
  };

  if (!visible) return null;

  return (
    <Modal show={visible} onClose={onClose} className='pt-[210px] xl:pt-0'>
      <Modal.Header className='mb-0'>
        Réinitialiser le mot de passe
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6 flex justify-between">
            <div>
              <label className="text-sm mb-1 block">Votre e-mail<span className='text-red-500'> *</span></label>
                <div className="relative flex items-center">
                  <input
                   name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    className="bg-white border border-gray-300 w-[290px] text-sm px-3 py-2.5 rounded outline-primaryGreen focus:ring-primaryGreen focus:border-primaryGreen"
                    placeholder="nom@gmail.com"
                    />
              <MdOutlineMailOutline className="w-4 h-4 absolute right-4" />
                  </div>
              </div>
          <button
            type="submit"
            className='px-4 py-1 text-sm font-semibold rounded text-white bg-primaryGreen hover:opacity-90 focus:outline-none'
            >
             Se connecter
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ForgotPassword;
