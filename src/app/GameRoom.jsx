import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MOCK_PLAYERS = [
  {
    id: 1,
    name: "Alice",
    status: "ready",
    isHost: true,
    hasVoted: false,
    isPlaying: false,
    isDead: false,
  },
  {
    id: 2,
    name: "Bob",
    status: "ready",
    isHost: false,
    hasVoted: false,
    isPlaying: false,
    isDead: false,
  },
  {
    id: 3,
    name: "Charlie",
    status: "connecting...",
    isHost: false,
    hasVoted: false,
    isPlaying: false,
    isDead: false,
  },
];

export default function GameRoom() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [gameState, setGameState] = useState("waiting"); // waiting, playing, voting
  const [players, setPlayers] = useState(MOCK_PLAYERS);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [timer, setTimer] = useState(null);
  const roomCode = "AXBY12"; // Pour le test, à remplacer par un vrai code généré

  // Mock de connexion d'un nouveau joueur
  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayers((prev) => [
        ...prev,
        {
          id: 4,
          name: "David",
          status: "ready",
          isHost: false,
          hasVoted: false,
          isPlaying: false,
          isDead: false,
        },
      ]);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Simuler le début du tour d'un joueur
  const startPlayerTurn = (playerId) => {
    setGameState("playing");
    setCurrentPlayer(playerId);
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        isPlaying: p.id === playerId,
      }))
    );
    // Reset des votes
    setTimer(state?.speakingTime || 20);
  };

  // Simuler le vote
  const handleVote = (votedId) => {
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        hasVoted: p.id === 1, // Simule que le joueur actuel a voté
        isDead: p.id === votedId ? true : p.isDead,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* En-tête avec code de salon */}
      <header className="bg-gray-800/50 border-b border-gray-700 p-4">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <h1 className="text-2xl font-bold">Salon de jeu</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Code du salon:</span>
            <span className="bg-indigo-600 px-4 py-2 rounded-lg font-mono text-lg">
              {roomCode}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl p-4">
        {/* État du jeu */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {gameState === "waiting"
                ? "En attente de joueurs..."
                : gameState === "playing"
                ? "Tour en cours"
                : "Phase de vote"}
            </h2>
            {timer && (
              <div className="bg-indigo-600 px-4 py-2 rounded-lg">{timer}s</div>
            )}
          </div>

          {/* Informations de la partie */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div>
              Joueurs: {players.filter((p) => !p.isDead).length}/
              {state?.playerCount || 4}
            </div>
            <div>Mode: {state?.mrWhite ? "Mr. White" : "Classique"}</div>
            <div>Débat: {state?.debateTime || 60}s</div>
            <div>Tour: {state?.speakingTime || 20}s</div>
          </div>
        </div>

        {/* Liste des joueurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {players.map((player) => (
            <div
              key={player.id}
              className={`p-4 rounded-lg flex items-center justify-between ${
                player.isPlaying
                  ? "bg-indigo-600"
                  : player.isDead
                  ? "bg-red-900/50"
                  : "bg-gray-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    player.status === "ready" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                />
                <span className="font-medium">{player.name}</span>
                {player.isHost && (
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Hôte
                  </span>
                )}
              </div>

              {gameState === "voting" && !player.isDead && (
                <button
                  onClick={() => handleVote(player.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-colors"
                >
                  Voter
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Contrôles de jeu */}
        {gameState === "waiting" && players[0].isHost && (
          <button
            onClick={() => startPlayerTurn(players[0].id)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors"
          >
            Commencer la partie
          </button>
        )}
      </main>
    </div>
  );
}
