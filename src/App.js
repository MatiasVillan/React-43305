import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/product/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/genre/:genreId" element={ <ItemListContainer /> } />
            <Route path="/cart" element={ <CartContainer /> } />
            <Route path="/checkout" element={ <CheckoutForm /> } />
            <Route path="/order-confirmation/:id" element={ <OrderConfirmation/>}/>
            <Route path="*" element={<h1>Error 404, Página no encontrada.</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;