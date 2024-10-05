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
          <p>Soy tatuadora profesional, experta en el estilo Neotradicional Ornamental,
            donde fusiono lo mejor de lo clásico y moderno.
            Mi enfoque es crear tatuajes personalizados que se adapten a tu propia historia.
            Después de 9 años de experiencia, me he dedicado a perfeccionar cada detalle para que
            lleves algo duradero y de calidad, me aseguro que lleguemos a una co-creación de tu visión y
            de mi estilo artístico.</p>
          <br></br>
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