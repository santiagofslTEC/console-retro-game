const PokemonCard = ({ pokemon }) => {
    if (!pokemon) return null;
  
    return (
      <div className="w-[580px] rounded-2xl bg-white p-6 shadow-lg">
  
        {/* Header */}
        <div className="rounded-xl bg-gray-100 p-4 mb-6">
          <p className="text-xs font-bold tracking-widest text-slate-400 mb-1">#{pokemon.id}</p>
          <h2 className="text-3xl font-black uppercase text-slate-800 mb-3">{pokemon.name}</h2>
          <div className="flex gap-2">
            {pokemon.types?.map((t) => (
              <span key={t.type.name} className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
  
        {/* Sprites */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src={pokemon.sprites?.front_default} className="h-28 w-full rounded-xl bg-gray-100 object-contain p-3" />
          <img src={pokemon.sprites?.back_default} className="h-28 w-full rounded-xl bg-gray-100 object-contain p-3" />
        </div>
  
        {/* Moves */}
        <h3 className="text-xl font-black text-slate-800 mb-3">Moves</h3>
        <div className="flex flex-col gap-2">
          {pokemon.moves?.slice(0, 10).map((m, index) => (
            <div key={`${m?.move?.name}-${index}`} className="flex justify-between items-center rounded-lg bg-gray-100 px-4 py-3">
              <span className="text-sm font-semibold capitalize text-slate-700">{m?.move?.name}</span>
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{m?.attack ?? '-'}</span>
            </div>
          ))}
        </div>
  
      </div>
    );
  };
  
  export default PokemonCard;