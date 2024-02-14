import './App.css';
import { Melody } from './components/Melody';
import Fondo from './components/Fondo';
import { Fotos } from './components/Fotos';
import { Pregunta } from './components/Pregunta';
function App() {
  return (
    <div className="App">
      <div className='all'>
      <header className="App-header">
        <Fondo />
        <h1>FELIZ SAN VALENTIN</h1>
        <Melody />
        <h2>Hecho con mucho amor para ti, mi vida.</h2>
        <h3>Si me amas, picale la carita a Melody 😘</h3>
      </header>
        <Fotos/>
        </div>
    </div>
  );
}

export default App;
