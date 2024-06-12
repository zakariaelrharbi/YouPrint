import React from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";

const ResetPassword = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <Modal show={visible} onClose={onClose}>
      <Modal.Header>
        Réinitialiser le mot de passe
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Réinitialiser votre mot de passe</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Votre e-mail" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="nom@entreprise.com"
              required
            />
          </div>
          <Button onClick={onClose}>
            Réinitialiser
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPassword;
