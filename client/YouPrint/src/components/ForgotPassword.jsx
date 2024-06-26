import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';

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
    <Modal show={visible} onClose={onClose}>
      <Modal.Header>
        Réinitialiser le mot de passe
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6 flex justify-between">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Votre e-mail" />
            </div>
            <TextInput
              id="email"
              type="email"
              value={data.email}
              placeholder="nom@entreprise.com"
              onChange={handleChange}
            />
          </div>
          <Button type="submit">
            Réinitialiser
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ForgotPassword;
