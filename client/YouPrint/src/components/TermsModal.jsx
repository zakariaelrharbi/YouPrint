// Code: TermsModal.jsx
import React from "react";
import { Modal } from "flowbite-react";

export function TermsModal({visible, onClose}) {
  if (!visible) return null;
  return (
    <>
      <Modal show={visible} onClose={onClose}>
        <Modal.Header>Conditions Générales</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <p><strong>Commandes :</strong> En passant une commande sur notre site, vous acceptez nos conditions générales de vente.</p>
            <p><strong>Prix :</strong> Les prix sont indiqués en euros et sont valables au moment de la commande, hors frais de livraison.</p>
            <p><strong>Paiement :</strong> Le règlement s'effectue en ligne par carte bancaire ou tout autre moyen de paiement sécurisé proposé sur le site.</p>
            <p><strong>Livraison :</strong> Les délais de livraison sont donnés à titre indicatif et peuvent varier en fonction de la disponibilité des produits et des services de livraison.</p>
            <p><strong>Retours :</strong> Vous disposez d'un délai de [nombre] jours à compter de la réception de votre commande pour nous retourner les produits qui ne vous conviendraient pas.</p>
            <p><strong>Propriété Intellectuelle :</strong> Tous les droits de propriété intellectuelle relatifs au site et à son contenu sont réservés.</p>
            <p><strong>Responsabilité :</strong> Notre responsabilité ne saurait être engagée en cas de force majeure ou de perturbation des services imputable à un tiers.</p>
            <p><strong>Loi Applicable :</strong> Les présentes conditions générales sont soumises au droit français.</p>
            <p><strong>Contact :</strong> Pour toute question ou réclamation, veuillez nous contacter à [vos coordonnées].</p>
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
