import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Typography } from 'antd';
const { Text } = Typography;

function App() {
  const [starships, setStarships] = useState('Naves');

  async function fetchMovies() {
    let naves = await fetch('https://swapi.dev/api/starships/');
    let respuesta = await naves.json();
    console.log(respuesta);
    setStarships(respuesta.results.map(ship => ship.name));
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => fetchMovies()}>Fetch Movies</button>
        <Text type="danger">{starships}</Text>
      </header>
    </div>
  );
}

export default App;
