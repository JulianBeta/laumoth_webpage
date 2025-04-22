import React from 'react';
import './App.css';
import Header from './general_components/Header';
import BannerIncio from './general_components/PrimeraSeccion';
import Contacto from './general_components/SegundaSeccion';
import Galeria from './general_components/TerceraSeccion';
import Servicios from './general_components/QuintaSeccion';
import Tienda from './general_components/CuartaSeccion';
import logofondo from './assets/fondo.jpg'
import Footer from './general_components/Footer';

function App() {
  return (
    <div className="App" style={{ background: `url(${logofondo})`, backgroundRepeat: 'repeat', backgroundAttachment: 'local', backgroundSize: '100%' }}   >
      <Header />
      <BannerIncio id="inicio"/>

        <Contacto id="contacto"/>
        <Servicios id="servicios"/>
        <Tienda id="tienda"/> 
           
       <Galeria id="galeria"/>
        {/* <Servicios/> */}
        <Footer/>

          </div>
  );
}

export default App;
