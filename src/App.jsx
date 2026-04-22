import React from 'react';
import './App.css';
import GameEngine from './components/GameEngine';
import IntroScreen from './components/IntroScreen';
import logo from './assets/logo.png';

function App() {
  const [isStarted, setIsStarted] = React.useState(false);

  return (
    <div className="app-container">
      <header>
        <div className="logo animate-fade-in delay-100" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Echo Logic Logo" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          Echo Logic
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {!isStarted ? (
          <IntroScreen onNext={() => setIsStarted(true)} />
        ) : (
          <GameEngine onComplete={() => alert('Game Finished! You can restart by refreshing.')} />
        )}
      </main>
    </div>
  );
}

export default App;
