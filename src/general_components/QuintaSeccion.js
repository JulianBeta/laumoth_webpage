import React from 'react'
import './../styles/SeccionQuinta.css'
import WhatsApp from './../assets/Whatsapp.png'
import instagram from './../assets/Instagram.png'

export default function Servicios() {
  return (
    <div className='ContenedorServicios'>
      <h2 className='TituloServicios'>SERVICIOS</h2>
      <div className='GaleriaServicios' >
        <div><div className='recuadroservicios'></div><b><h3>Cubrimientos</h3></b><p>Nombre de producto</p><p>Precio</p></div>
        <div><div className='recuadroservicios'></div><b><h3>Tatuajes</h3></b><p>Nombre de producto</p><p>Precio</p></div>
        <div><div className='recuadroservicios'></div><b><h3>Piercing</h3></b><p>Nombre de producto</p><p>Precio</p></div>
      </div>
      <h2>CONTACTO</h2>
      <div className='BotonesContacto'>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://www.instagram.com/laura.moth'><button ><img className='imgWA' src={instagram} /><div className='buttonText'>@LAURA.MOTH</div></button></a>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button ><img className='imgIM' src={WhatsApp} /><div className='buttonText'>+57 316 8956823</div></button></a>
      </div>


    </div>
  )
}
