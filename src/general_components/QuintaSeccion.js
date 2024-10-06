import React from 'react';
import './../styles/SeccionQuinta.css';
import WhatsApp from './../assets/Whatsapp.png';
import instagram from './../assets/Instagram.png';
import rectangle from './../assets/Rectangle.png'; // First image
import rectangleHover from './../assets/printmoth.jpg'; // Second image (to be revealed on hover)

export default function Servicios() {
  return (
    <div className='ContenedorServicios'>
      <h2 className='TituloServicios'>SERVICIOS</h2>
      <div className='GaleriaServicios'>
        {/* First Service */}
        <div className='servicio'>
          <b><h3>Cubrimientos</h3></b>
          <p>Cuando ese tatuaje que tienes ya no te representa o quieres darle nueva vida, creamos una nueva composición que cubra muy bien el antiguo tatuaje.</p>
          <hr className="divider" />
          <div className='image-container'>
            <img 
              className='recuadroservicios' 
              src={rectangle} 
              alt="Cubrimientos" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={rectangleHover} 
              alt="Cubrimientos Hover" 
            />
          </div>
        </div>

        {/* Second Service */}
        <div className='servicio'>
          <b><h3>Tatuajes</h3></b>
          <p>Tatuajes personalizados donde mezclamos tu visión y mi estilo artístico para co-crear una pieza única y de calidad.</p>
          <hr className="divider" />
          <div className='image-container'>
            <img 
              className='recuadroservicios' 
              src={rectangle} 
              alt="Tatuajes" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={rectangleHover} 
              alt="Tatuajes Hover" 
            />
          </div>
        </div>

        {/* Third Service */}
        <div className='servicio'>
          <b><h3>Piercing</h3></b>
          <p>Joyería de alta calidad y procesos precisos y altamente especializados para decorar tu cuerpo con perforaciones únicas y acordes a tu anatomía.</p>
          <hr className="divider" />
          <div className='image-container'>
            <img 
              className='recuadroservicios' 
              src={rectangle} 
              alt="Piercing" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={rectangleHover} 
              alt="Piercing Hover" 
            />
          </div>
        </div>
      </div>

      <h2>CONTACTO</h2>
      <div className='BotonesContacto'>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://www.instagram.com/laura.moth'>
          <button><img className='imgWA' src={instagram} alt="Instagram" />
          <div className='buttonText'>@LAURA.MOTH</div></button>
        </a>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'>
          <button><img className='imgIM' src={WhatsApp} alt="WhatsApp" />
          <div className='buttonText'>+57 316 8956823</div></button>
        </a>
      </div>
    </div>
  );
}