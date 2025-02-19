import { useState } from "react";
import { Play, Book, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (mode) => {
    navigate(`/${mode}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Cercle décoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-pink-500/20" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {/* Logo/Titre avec effet glassmorphism */}
        <div className="relative backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h1 className="text-7xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            UNDER
            <span className="text-blue-500">COVER</span>
          </h1>
        </div>

        {/* Boutons */}
        <div className="flex flex-col items-center gap-6 w-72">
          {/* Bouton Jouer avec effet hover */}
          <button
            className="group relative w-full"
            onMouseEnter={() => setIsPlayHovered(true)}
            onMouseLeave={() => setIsPlayHovered(false)}
            onClick={() => handleRedirect("gameMode")}
          >
            <div
              className={`
              absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur 
              transition-all duration-300 group-hover:blur-xl
              ${isPlayHovered ? "opacity-100" : "opacity-75"}
            `}
            />
            <div className="relative flex items-center justify-center gap-3 bg-gray-900 rounded-lg px-8 py-4 transition-transform duration-300 group-hover:-translate-y-1">
              <Play
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-xl font-bold">JOUER</span>
            </div>
          </button>

          {/* Bouton Règles avec effet glassmorphism */}
          <button
            className="w-full backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-lg px-8 py-4 transition-all duration-300 hover:-translate-y-1"
            onClick={() => handleRedirect("rules")}
          >
            <div className="flex items-center justify-center gap-3">
              <Book size={20} />
              <span className="text-lg font-semibold">Règles</span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer avec animation pulse */}
      <div className="absolute bottom-8 flex items-center gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <Users size={16} className="text-green-500" />
        </div>
        <span className="text-sm">324 joueurs en ligne</span>
      </div>
    </div>
  );
};

export default HomePage;
