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
        
      <div className='BotonesContacto'>

        <button className='botonWhatsapp'><a target='_blank' rel='noreferrer' href='https://www.instagram.com/moleonart'><img className='imgWA' src={instagram} />  @LauraMoth</a></button>
        <button className='botonInstagram'><a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><img className='imgIM' src={WhatsApp} /> +57 316 8956823</a></button>

      </div>

    </div>
  )
}

export default Contacto;