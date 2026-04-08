import { useEffect, useState } from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/Rightcontrol';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';
import GameScreen from './components/GameScreen';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data } = useFetch(url);
  const [pokemones, setPokemones] = useState([]);
  const [selected, setSelected] = useState(0);

  const [myPokeSelection, setMyPokeSelection] = useState(null);
  const [pcPokeSelection, setPcPokeSelection] = useState(null);

  const handleBack = () => {
    console.log('back pressed');
    setMyPokeSelection(null);
    setPcPokeSelection(null);
  };

  const handleDirection = (direction) => {
    if (direction === 'up') setSelected((prev) => Math.max(0, prev - 4));
    if (direction === 'down') setSelected((prev) => Math.min(pokemones.length - 1, prev + 4));
    if (direction === 'left') setSelected((prev) => Math.max(0, prev - 1));
    if (direction === 'right') setSelected((prev) => Math.min(pokemones.length - 1, prev + 1));
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

  const handleSelection = () => {
    const myPoke = pokemones[selected];
    const rnd = getRandomInt(0, pokemones.length);
    const pcPoke = pokemones[rnd];
    setMyPokeSelection(myPoke);
    setPcPokeSelection(pcPoke);
  };
  

  useEffect(() => {
    if (!data?.results) return;
    const list = data.results.filter((p) => p.url);
    const requests = list.map((p) => fetch(p.url).then((res) => res.json()));
    Promise.all(requests).then((values) => setPokemones(values));
  }, [data]);




  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex items-stretch">
        <LeftControl onDirection={handleDirection} />
        {myPokeSelection && pcPokeSelection ? (
          <GameScreen myPoke={myPokeSelection} pcPoke={pcPokeSelection} />
        ) : (
          <Screen pokemones={pokemones} selected={selected} />
        )}
        <RightControl handleSelection={handleSelection} handleBack={handleBack} />
      </div>
    </div>
  );
}

export default App;