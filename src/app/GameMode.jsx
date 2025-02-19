/**
 * GameMode Component
 *
 * This component handles game creation and joining functionality
 * Allows users to:
 * - Create a new game session
 * - Join an existing game using a code/ID
 * - Configure game settings before starting
 */

// Component implementation will go here
import React from "react";
import { Book, PlusCircle, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

function GameMode() {
  const navigate = useNavigate();

  const handleRedirect = (mode) => {
    navigate(`/${mode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">GameMode</h1>
      <div className="space-y-4 w-full max-w-md">
        <button
          className="w-full backdrop-blur-sm bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-4 transition-all duration-300 hover:-translate-y-1"
          onClick={() => handleRedirect("creer")}
        >
          <div className="flex items-center justify-center gap-3">
            <PlusCircle size={20} />
            <span className="text-lg font-semibold">Créer</span>
          </div>
        </button>
        <button
          className="w-full backdrop-blur-sm bg-green-600 hover:bg-green-700 rounded-lg px-8 py-4 transition-all duration-300 hover:-translate-y-1"
          onClick={() => handleRedirect("rejoindre")}
        >
          <div className="flex items-center justify-center gap-3">
            <LogIn size={20} />
            <span className="text-lg font-semibold">Rejoindre</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default GameMode;
