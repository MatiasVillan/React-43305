import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <ItemListContainer greeting="Bienvenidos a la tienda." />
      </BrowserRouter>
    </div>
  )
}

export default App;
