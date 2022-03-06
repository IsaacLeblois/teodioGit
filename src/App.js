import './App.css';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Inicio" /> } />
          <Route path="/promos" element={ <ItemListContainer greeting="Promociones" /> } />
          <Route path="/catalogo/:id" element={ <ItemListContainer greeting="Catalogo" /> } />
          <Route path="/contacto" element={ <ItemListContainer greeting="Contacto" /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer greeting="Item" /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
