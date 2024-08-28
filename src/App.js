import React from 'react';
import './App.css';
import Header from './general_components/Header';
import PrimeraSeccion from './general_components/PrimeraSeccion';
import SegundaSeccion from './general_components/SegundaSeccion';
import TerceraSeccion from './general_components/TerceraSeccion';
import CuartaSeccion  from './general_components/CuartaSeccion';

function App() {
  return (
    <div className="App">
      <Header />
      <PrimeraSeccion />
      <SegundaSeccion/>
      <TerceraSeccion/>
      <CuartaSeccion/>

    </div>
  );
}

export default App;
