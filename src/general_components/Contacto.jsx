import React from 'react';
import './../styles/SeccionQuinta.css';
import WhatsApp from './../assets/Whatsapp.png';
import instagram from './../assets/Instagram.png';



export default function Contacto() { 
  return (
   <div>
      <h2 className='Titulocontacto' id='contacto'>CONTACTO</h2>
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