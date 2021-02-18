import { useState, useEffect } from 'react';
import Jokes from './components/Jokes';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes ]= useState([]);
  const [page, setPage ]= useState(1);

  useEffect(async () => {
    const list = await axios.get(
      `https://icanhazdadjoke.com/search?limit=20&page=${page}`,
      {
        headers: { Accept: 'application/json' }
      }
    );
    setJokes(list.data.results);
  }, [page])
  
  const updateJokes = () => {
    setPage(page+1);
  };

  return (
    <div className="App">
      <header className="header">
        <h2>Jokes</h2>
        <button className='btn' onClick={updateJokes}>Refresh</button>
      </header>
      <Jokes data={jokes}/>
    </div>
  );
}

export default App;
