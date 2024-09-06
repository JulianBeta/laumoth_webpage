import React from 'react';
import './App.css';
import Header from './general_components/Header';
import BannerIncio from './general_components/PrimeraSeccion';
import Contacto from './general_components/SegundaSeccion';
import Galeria from './general_components/TerceraSeccion';
import Tienda from './general_components/CuartaSeccion';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerIncio />
      <Contacto/>
      <Galeria/>
      <Tienda/>

    </div>
  );
}

export default App;
