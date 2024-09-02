import React from 'react'
import FotoContactos from './../assets/FotoContactos.jpg'
import WhatsApp from './../assets/WhatsApp.jpg'
import instagram from './../assets/Instagram.jpg'
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
        <h2>Contacto</h2>
      <div className='BotonesContacto'>

      <a className='botonWhatsapp' target='_blank' rel='noreferrer' href='https://www.instagram.com/moleonart'><button ><img className='imgWA' src={instagram} />  @LauraMoth</button></a>
        <a className='botonInstagram' target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button ><img className='imgIM' src={WhatsApp} /> +57 316 8956823</button></a>

      </div>

    </div>
  )
}

export default Contacto;