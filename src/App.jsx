import { useEffect, useState } from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data } = useFetch(url);
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    if (!data?.results) return;
    const list = data.results.filter((p) => p.url);
    const requests = list.map((p) => fetch(p.url).then((res) => res.json()));
    Promise.all(requests).then((values) => setPokemones(values));
  }, [data]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center">
        <LeftControl />
        <Screen pokemones={pokemones} />
        <RightControl />
      </div>
    </div>
  );
}

export default App;