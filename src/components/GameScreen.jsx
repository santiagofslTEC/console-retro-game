import { useState } from 'react';

const GameScreen = ({ myPoke, pcPoke }) => {
  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);

  const winner = myHP === 0 ? pcPoke?.name : pcHP === 0 ? myPoke?.name : null;

  const handleAttack = (attack) => {
    setPcHP((prev) => Math.max(0, prev - attack));
    const randomMove = pcPoke?.moves?.slice(0, 4)[Math.floor(Math.random() * 4)];
    setMyHP((prev) => Math.max(0, prev - (randomMove?.attack ?? 0)));
  };

  return (
    <div className="w-122.5 h-70 bg-gray-900 border-8 border-gray-700 rounded-lg flex flex-col p-4 gap-4 overflow-y-auto" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Battle.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Pokemon row */}
      <div className="flex items-center justify-around">

        {/* My Pokemon */}
        <div className="flex flex-col items-center border border-yellow-400 rounded p-3 bg-gray-800">
          <p className="text-gray-400 text-xs mb-1">You</p>
          <img src={myPoke?.sprites?.front_default} className="w-20 h-20" alt={myPoke?.name} />
          <span className="text-white text-xs capitalize font-bold">{myPoke?.name}</span>
          <p className="text-green-400 text-xs mt-1">HP: {myHP}/100</p>
          <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
            <div className="bg-green-400 h-2 rounded-full transition-all" style={{ width: `${myHP}%` }} />
          </div>
        </div>

        <p className="text-yellow-400 text-2xl font-bold">VS</p>

        {/* PC Pokemon */}
        <div className="flex flex-col items-center border border-red-400 rounded p-3 bg-gray-800">
          <p className="text-gray-400 text-xs mb-1">Computer</p>
          <img src={pcPoke?.sprites?.front_default} className="w-20 h-20" alt={pcPoke?.name} />
          <span className="text-white text-xs capitalize font-bold">{pcPoke?.name}</span>
          <p className="text-green-400 text-xs mt-1">HP: {pcHP}/100</p>
          <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
            <div className="bg-red-400 h-2 rounded-full transition-all" style={{ width: `${pcHP}%` }} />
          </div>
        </div>

      </div>

      {/* Winner banner */}
      {winner && (
        <div className="flex flex-col items-center bg-yellow-400 rounded-lg p-4">
          <p className="text-gray-900 text-2xl font-black uppercase">{winner} wins!</p>
        </div>
      )}

      {/* Moves */}
      {!winner && (
        <div className="grid grid-cols-2 gap-2">
          {myPoke?.moves?.slice(0, 4).map((m, index) => (
            <button
              key={`${m?.move?.name}-${index}`}
              onClick={() => handleAttack(m?.attack)}
              className="bg-gray-800 border border-yellow-400 rounded px-3 py-2 flex justify-between items-center cursor-pointer hover:bg-yellow-400 hover:text-gray-900"
            >
              <span className="text-white text-xs capitalize">{m?.move?.name}</span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{m?.attack}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default GameScreen;