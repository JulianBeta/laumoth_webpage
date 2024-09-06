import React from 'react'
import FotoContactos from './../assets/fotomia.png'
import WhatsApp from './../assets/Whatsapp.png'
import instagram from './../assets/Instagram.png'
import './../styles/SeccionSegunda.css'


const Contacto = () => {
  return (
    <div className='ContenedorContacto'>
      <div className='ConteTexFot'>
        <div className='TextoContacto'>
          <p>Empiezo a tatuar en 2015 en Bogotá, Colombia, donde resido actualmente</p>
          <br></br>
          Manejo diferentes enfoques, pero siempre intento integrar mi estilo más ilustrativo sin alterar el original.
        </div>
        <div className='FotoContacto'>
          <img className='imgcontacto' src={FotoContactos} />
        </div>
      </div>
        <h2>CONTACTO</h2>
      <div className='BotonesContacto'>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://www.instagram.com/laura.moth'><button ><img className='imgWA' src={instagram} /><div className='buttonText'>@LAURA.MOTH</div></button></a>
        <a className='botonRedes' target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button ><img className='imgIM' src={WhatsApp} /><div className='buttonText'>+57 316 8956823</div></button></a>
      </div>

    </div>
  )
}

export default Contacto;