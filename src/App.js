import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from '@tsparticles/react';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
      <Particles 
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            size: {
              value: 5,
              random: true,
              animation: {
                enable: true,
                speed: 40,
                minimumValue: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              bounce: false,
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          zIndex: 2, // Higher zIndex
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;