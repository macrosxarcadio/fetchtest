import './App.css';
import React, { useState } from 'react';
import { Table, Typography } from 'antd';

const { Text, Title } = Typography;

function App() {
  const [datasource, setDatasource] = useState();
  async function fetchMovies() {
    const naves = await fetch('https://swapi.dev/api/starships/');
    const respuesta = await naves.json();
    const allships = respuesta.results.reduce(
      (ships, ship, index) =>
        ships.concat({
          key: `${index}`,
          name: `${ship.name}`,
          model: `${ship.model}`,
          manufacturer: `${ship.manufacturer}`,
        }),
      []
    );
    setDatasource(allships);
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Manofacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Title leve={2}>Spaceships</Title>
        <button type="button" onClick={() => fetchMovies()}>
          {' '}
          Ships{' '}
        </button>
        {datasource ? (
          <Table dataSource={datasource} columns={columns} pagination={false} />
        ) : (
          <>
            {' '}
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
            <Text>Not ready</Text>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
