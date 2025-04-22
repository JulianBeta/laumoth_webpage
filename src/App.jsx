import React from 'react';
import './App.css';
import Header from './general_components/Header';
import BannerIncio from './general_components/PrimeraSeccion';
import Contacto from './general_components/Contacto';
import Galeria from './general_components/TerceraSeccion';
import Servicios from './general_components/QuintaSeccion';
import Tienda from './general_components/CuartaSeccion';
import logofondo from './assets/fondo.jpg'
import Footer from './general_components/Footer';
import Biografia from './general_components/SegundaSeccion'

function App() {
  return (
    <div className="App" style={{ background: `url(${logofondo})`, backgroundRepeat: 'repeat', backgroundAttachment: 'local', backgroundSize: '100%' }}   >
      <Header />
      <BannerIncio id="inicio"/>
      <Biografia/>
      <Servicios id="servicios"/>
      <Contacto />
      <Tienda id="tienda"/>   
      <Galeria id="galeria"/>
      <Footer/>
    </div>
  );
}

export default App;
