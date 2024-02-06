import './App.css';
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("./pages/letter.js")
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>FELIZ SAN VALENTIN</p>
        <img src={require("./img/my-melody-love.gif")} className="Melody" onClick={handleClick}/>
        <h2>Un lugar hecho con mucho amor para ti, mi vida.</h2>
      </header>
    </div>
  );
}

export default App;
