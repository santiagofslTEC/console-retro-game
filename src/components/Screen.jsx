const Screen = ({ pokemones, selected }) => {
    return (
      <div className="w-122.5 h-70 bg-gray-900 border-8 border-gray-700 rounded-lg grid grid-cols-5 overflow-y-auto p-2 gap-2">
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
