import './App.css';
import { Suspense } from 'react';
import ParticleBackground from 'react-particle-backgrounds'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Projects from './components/Projects';
import Loader from './components/Loader.js';
import Socials from './components/Socials.js';

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
    <Suspense fallback={<Loader/>}>
      <div className="App">
        <ParticleBackground settings={settings} className="bg"/>
        <Routes>
          <Route
            path='/'
            element={<Landing/>}
          />
          <Route
            path='/about'
            element={<About/>}
          />
          <Route
            path='/projects'
            element={<Projects/>}
          />
          
        </Routes>
        <Socials/>
      </div>
    </Suspense>
  );
}

export default App;
