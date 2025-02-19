import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Creer() {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    playerCount: 4,
    saboteur: false,
    undercover: true,
    mrWhite: false,
    speakingTime: 20,
    debateTime: 60,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Plus tard, vous pourrez ajouter ici la logique de création de partie côté serveur
    navigate("/game", {
      state: {
        ...config,
        roomCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
        createdAt: new Date().toISOString(),
      },
    });
  };

  // Le reste du composant reste inchangé
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Configuration de la partie
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre de joueurs */}
          <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg">
            <label className="block text-lg mb-2">Nombre de joueurs</label>
            <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-xl font-bold transition-colors"
                onClick={() =>
                  setConfig((prev) => ({
                    ...prev,
                    playerCount: Math.max(4, prev.playerCount - 1),
                  }))
                }
              >
                -
              </button>
              <span className="text-2xl font-bold">{config.playerCount}</span>
              <button
                type="button"
                className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-xl font-bold transition-colors"
                onClick={() =>
                  setConfig((prev) => ({
                    ...prev,
                    playerCount: Math.min(12, prev.playerCount + 1),
                  }))
                }
              >
                +
              </button>
            </div>
          </div>

          {/* Rôles */}
          <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold mb-2">Rôles spéciaux</h2>
            <div className="space-y-3">
              {[
                { key: "saboteur", label: "Saboteur" },
                { key: "undercover", label: "Undercover" },
                { key: "mrWhite", label: "Mr. White" },
              ].map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center justify-between p-2 bg-gray-700 rounded-lg cursor-pointer group"
                >
                  <span className="text-lg">{label}</span>
                  <div
                    className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                      config[key] ? "bg-indigo-600" : "bg-gray-600"
                    }`}
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, [key]: !prev[key] }))
                    }
                  >
                    <div
                      className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                        config[key] ? "translate-x-6" : ""
                      }`}
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Temps */}
          <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg space-y-4">
            <h2 className="text-lg font-semibold mb-2">
              Configuration du temps
            </h2>

            {/* Temps de parole */}
            <div className="space-y-2">
              <label className="block text-sm">
                Temps de parole par joueur: {config.speakingTime}s
              </label>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={config.speakingTime}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    speakingTime: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Temps de débat */}
            <div className="space-y-2">
              <label className="block text-sm">
                Temps de débat: {config.debateTime}s
              </label>
              <input
                type="range"
                min="30"
                max="180"
                step="15"
                value={config.debateTime}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    debateTime: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Bouton de création */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Créer la partie
          </button>
        </form>
      </div>
    </div>
  );
}
