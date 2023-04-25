import './App.css';
import ParticleBackground from 'react-particle-backgrounds'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';

function App() {

  const settings = {
    particle: {
      particleCount: 70,
      color: "#fff",
      minSize: 1,
      maxSize: 4
    },
    velocity: {
      minSpeed: 0.2,
      maxSpeed: 0.4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  }

  return (
    <div className="App">
      <ParticleBackground settings={settings} className="bg"/>
      <Routes>
        <Route
          path='/'
          element={<Landing/>}
        />
        
      </Routes>
    </div>
  );
}

export default App;
