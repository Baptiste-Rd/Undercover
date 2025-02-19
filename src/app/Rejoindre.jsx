const RejoindrePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <h1 className="text-4xl font-bold">Rejoindre une partie</h1>
      <p className="mt-4 text-lg">
        <input
          type="text"
          placeholder="Code de la partie"
          className="bg-gray-800/50 px-4 py-2 rounded-lg"
        />
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Rejoindre
      </button>
    </div>
  );
};

export default RejoindrePage;
