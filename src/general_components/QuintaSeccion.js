import React from 'react';
import './../styles/SeccionQuinta.css';
import WhatsApp from './../assets/Whatsapp.png';
import instagram from './../assets/Instagram.png';
import rectangle from './../assets/Rectangle.png';

export default function Servicios() {
  return (
    <div className='ContenedorServicios'>
      <h2 className='TituloServicios'>SERVICIOS</h2>
      <div className='GaleriaServicios'>
        <div>
          <img className='recuadroservicios' src={rectangle} alt="Cubrimientos"></img>
          <hr className="divider" /> {/* Divider between image and text */}
          <b><h3>Cubrimientos</h3></b>
          <p>Cuando ese tatuaje que tienes ya no te representa o quieres darle nueva vida, creamos una nueva composición que cubra muy bien el antiguo tatuaje.</p>
        </div>
        <div>
          <img className='recuadroservicios' src={rectangle} alt="Tatuajes"></img>
          <hr className="divider" />
          <b><h3>Tatuajes</h3></b>
          <p>Tatuajes personalizados donde mezclamos tu visión y mi estilo artístico para co-crear una pieza única y de calidad.</p>
        </div>
        <div>
          <img className='recuadroservicios' src={rectangle} alt="Piercing"></img>
          <hr className="divider" />
          <b><h3>Piercing</h3></b>
          <p>Joyería de alta calidad y procesos precisos y altamente especializados para decorar tu cuerpo con perforaciones únicas y acordes a tu anatomía.</p>
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
