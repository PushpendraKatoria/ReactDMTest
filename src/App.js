import React from 'react';
// import SwitchTile from './SwitchTile';
import SwitchTileTable from './SwitchTileTable';
import data from './data/input.json'
import './App.css'

function App() {
  return (
    <>
      <div className='app-class'>
        <SwitchTileTable data={data} firstSectionTitle='GENERAL' secondSectionTitle='SETTINGS'/>
      </div>
    </>
  );
}

export default App;
