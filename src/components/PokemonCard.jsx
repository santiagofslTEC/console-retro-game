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
    <section className='w-[400px] rounded-2xl bg-slate-800 mt-10 mb-6 shadow-xl overflow-hidden'>

      {/* Header card */}
      <div className='flex flex-col items-start gap-2 bg-slate-700 rounded-2xl mx-4 mt-4 mb-2 px-6 py-5'>
        <p className='text-xs font-bold tracking-[0.2em] text-slate-400'>#{String(pokemon?.id).padStart(3, '0')}</p>
        <h2 className='text-3xl font-black uppercase text-white leading-tight font-mono'>{pokemon?.name}</h2>
        <div className='flex gap-2'>
        {pokemon?.types?.map((t) => (
          <span key={t.type.name} className='text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest bg-sky-400'>
            {t.type.name}
          </span>
        ))}
        </div>
      </div>

      {/* Sprites */}
      <div className='flex justify-center gap-6 pt-2 pb-0 px-6 bg-slate-800'>
        <img
          src={pokemon?.sprites?.front_default}
          alt={`${pokemon?.name ?? 'pokemon'} front`}
          className='h-30 w-30 object-contain'
        />
        <img
          src={pokemon?.sprites?.back_default}
          alt={`${pokemon?.name ?? 'pokemon'} back`}
          className='h-30 w-30 object-contain'
        />
      </div>

      {/* Moves */}
      <div className='px-6 pt-1 pb-3'>
        <h3 className='mb-3 text-lg font-black text-white'>Moves</h3>
        <div className='space-y-2 max-h-64 overflow-y-auto'>
                {moves.map((move, index) => (
                  <div
                    key={`${move?.move?.name ?? 'move'}-${index}`}
                    className='flex items-center justify-between bg-slate-700 rounded-xl px-4 py-2'
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