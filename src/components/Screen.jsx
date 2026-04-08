const Screen = ({ pokemones, selected }) => {
    return (
      <div className="w-[420px] h-60 bg-gray-900 border-8 border-gray-700 rounded-lg flex flex-wrap overflow-y-auto p-2 gap-2"> {/* flex flex wrap lays cards out in ropw the wraps to next line when its*/ }
        {pokemones.map((pokemon, index) => (
          <div
            key={pokemon.id}
            className={`flex flex-col items-center border rounded p-1 ${
              index === selected
                ? 'border-red-500 bg-gray-700'
                : 'border-gray-600 bg-gray-800'
            }`}
          >
            <img
              src={pokemon?.sprites?.front_default}
              className="w-16 h-16"
              alt={pokemon.name}
            />
            <span className="text-white text-xs capitalize">{pokemon.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Screen;
