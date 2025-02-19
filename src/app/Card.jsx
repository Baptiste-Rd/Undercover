import React from "react";
import { useState } from "react";

//Composant Card qui se ferme lorsqu'on clique sur le bouton Close
const Card = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ne rend rien si la carte est fermée

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/75 w-full`}
    >
      <div className="bg-gray-800 rounded-lg shadow-lg w-80 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Card Component</h2>
        <p className="text-gray-400 mb-4">
          This is the Card component content.
        </p>
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          onClick={() => onClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Card;
