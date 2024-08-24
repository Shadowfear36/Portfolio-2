import './App.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadFull } from 'tsparticles';
import { Particles } from 'react-tsparticles';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Projects from './components/Projects';
import Loader from './components/Loader.js';
import Socials from './components/Socials.js';

function App() {
  const particlesInit = async (main) => {
    // This loads the tsparticles package bundle
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#000", // Background color of the particle area
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        speed: 1,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70, // Number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="bg" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Socials />
      </div>
    </Suspense>
  );
}

export default App;
