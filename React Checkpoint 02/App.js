import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ 
          color: '#fff', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          margin: '20px 0'
        }}>
          FIFA Star Players
        </h1>
      </header>
      <PlayersList />
    </div>
  );
}

export default App;