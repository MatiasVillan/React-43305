import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/product/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={<h1>Error 404, Página no encontrada.</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
