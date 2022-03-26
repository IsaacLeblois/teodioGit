import './App.css';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import ItemAirbusContainer from './components/itemAirbusContainer';
import ItemBoeingContainer from './components/itemBoeingContainer';
import ItemAntonovContainer from './components/itemAntonovContainer';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CartView from './components/cart/cart'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Item from './components/item';
import { CartContextProvider } from './components/context/cartContext';

function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting="Inicio" /> } />
            <Route path="/airbus" element={ <ItemAirbusContainer greeting="Airbus" /> } />
            <Route path="/boeing" element={ <ItemBoeingContainer greeting="Boeing" /> } />
            <Route path="/antonov" element={ <ItemAntonovContainer greeting="Antonov" /> } />
            <Route path="/item/:id" element={ <ItemDetailContainer greeting="Detalles" /> } />
            <Route path="/cart" element={ <CartView greeting="Tu carrito" /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
