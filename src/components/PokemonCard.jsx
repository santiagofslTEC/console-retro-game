import React from 'react'

const formatMoveName = (name = '') => name.replace(/-/g, ' ')

const attackBadgeColor = (attack) => {
  if (attack >= 50) return 'bg-red-500'
  if (attack >= 30) return 'bg-orange-400'
  return 'bg-yellow-400'
}

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null

  const moves = pokemon?.moves?.slice(0, 10) ?? []

  return (
    <section className='w-[450px] rounded-2xl bg-slate-800 p-6  mt-6 mb-6'>

      {/* Header card */}
      <div className='flex flex-col items-center gap-2 rounded-2xl bg-slate-100 px-6 py-5'>
        <p className='text-xs font-bold tracking-[0.2em] text-slate-400'>#{String(pokemon?.id).padStart(3, '0')}</p>
        <h2 className='text-2xl font-black uppercase text-slate-800 text-center leading-tight'>{pokemon?.name}</h2>
        <div className='flex gap-2'>
          {pokemon?.types?.map((t) => (
            <span key={t.type.name} className='bg-sky-400 text-white text-[10px] font-bold px-4 py-0.5 rounded uppercase tracking-widest'>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* Sprites */}
      <div className='flex justify-center gap-6 my-6'>
        <img
          src={pokemon?.sprites?.front_default}
          alt={`${pokemon?.name ?? 'pokemon'} front`}
          className='h-28 w-28 object-contain'
        />
        <img
          src={pokemon?.sprites?.back_default}
          alt={`${pokemon?.name ?? 'pokemon'} back`}
          className='h-28 w-28 object-contain'
        />
      </div>

      {/* Moves */}
      <div>
        <h3 className='mb-2 text-lg font-black text-slate-100'>Moves</h3>
        <div className='space-y-1.5'>
          {moves.map((move, index) => (
            <div
              key={`${move?.move?.name ?? 'move'}-${index}`}
              className='flex items-center justify-between px-1 py-1'
            >
              <span className='text-sm font-semibold capitalize text-slate-100'>
                {formatMoveName(move?.move?.name)}
              </span>
              <span className={`rounded-lg ${attackBadgeColor(move?.attack)} px-3 py-0.5 text-sm font-bold text-white min-w-[2.5rem] text-center`}>
                {move?.attack ?? '-'}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default PokemonCard