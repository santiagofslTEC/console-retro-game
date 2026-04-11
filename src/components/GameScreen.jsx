const GameScreen = ({ myPoke, pcPoke }) => {
    return (
      <div className="w[420px] h-60 bg-gray-900 border-8 border-gray-700 rounded-lg flex flex-col items-center justify-around p-2 gap-2">
        
        
        <div className="flex items-center justify-around w-full">
          
       
          <div className="flex flex-col items-center border border-yellow-400 rounded p-3 bg-gray-800">
            <p className="text-gray-400 text-xs mb-1">You</p>
            <img src={myPoke?.sprites?.front_default} className="w-24 h-24" alt={myPoke?.name} />
            <span className="text-white text-sm capitalize font-bold">{myPoke?.name}</span>
          </div>

          <p className="text-yellow-400 text-sm font-bold">VS</p>
  
  
        
          <div className="flex flex-col items-center border border-red-400 rounded p-3 bg-gray-800">
            <p className="text-gray-400 text-xs mb-1">Computer</p>
            <img src={pcPoke?.sprites?.front_default} className="w-24 h-24" alt={pcPoke?.name} />
            <span className="text-white text-sm capitalize font-bold">{pcPoke?.name}</span>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default GameScreen;