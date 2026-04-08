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

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      const saniData = values.map((e) => {
        return {
          name: e.name,
          moves: e.moves.map((e) => {
            return {
              ...e,
              attack: getRandomInt(1, 400),
            };
          }),
          sprites: e.sprites,
        };
      });
      setPokemones(saniData);
    });
  };

  const handleBack = () => {
    setMyPokeSelection(null);
    setPcPokeSelection(null);
  };

  const handleDirection = (direction) => {
    if (direction === 'up') setSelected((prev) => Math.max(0, prev - 4));
    if (direction === 'down') setSelected((prev) => Math.min(pokemones.length - 1, prev + 4));
    if (direction === 'left') setSelected((prev) => Math.max(0, prev - 1));
    if (direction === 'right') setSelected((prev) => Math.min(pokemones.length - 1, prev + 1));
  };

  const handleSelection = () => {
    const myPoke = pokemones[selected];
    const rnd = getRandomInt(1, 100) - 1;
    const pcPoke = pokemones[rnd];
    setMyPokeSelection(myPoke);
    setPcPokeSelection(pcPoke);
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  return (
    <div className="h-screen bg-gray-950 flex flex-col items-center justify-center ">
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