import React from 'react';
import './App.css';
import GetStarted from './NavRoutes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DATAMON</h1>
        <GetStarted />
      </header>
      <h1 className="mission">Our Mission</h1>
    </div>
  );
}

export default App;
