import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const ResetPassword = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  
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
      dispatch(signInFailure('Please enter your email address'));
      toast.error('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      dispatch(signInFailure('Please enter a valid email address'));
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      dispatch(signInStart());
      const dataResponse = await fetch('http://localhost:5000/api/forget-password', {
        method: 'POST',
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
      } else {
        dispatch(signInFailure(dataRes.message));
        toast.error(dataRes.message);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message);
    }
  };

  if (!visible) return null;

  return (
    <Modal show={visible} onClose={onClose}>
      <Modal.Header>
        Réinitialiser le mot de passe
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Réinitialiser votre mot de passe</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Votre e-mail" />
            </div>
            <TextInput
              id="email"
              type="email"
              value={data.email}
              placeholder="nom@entreprise.com"
              required
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

export default ResetPassword;
