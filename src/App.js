import './App.css';
import ButtonComponent from "./components/ButtonComponent/ButtonComponent"
import Saludo from "./components/Saludo/Saludo";

function App() {
  return (
    <div className="App">
      <Saludo />
      <ButtonComponent label="Boton 1" />
      <ButtonComponent label="Otro boton." />
      <ButtonComponent />
    </div>
  );
}

export default App;
