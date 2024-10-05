import React from 'react'
import FotoContactos from './../assets/fotomia.png'

import './../styles/SeccionSegunda.css'


const Contacto = () => {
  return (
    <div className='ContenedorContacto'>
      <div className='ConteTexFot'>
        <div className='TextoContacto'>
          <p>Soy tatuadora profesional, experta en el estilo Neotradicional Ornamental,
            donde fusiono lo mejor de lo clásico y moderno. <br></br>
            <br></br>
            Mi enfoque es crear tatuajes personalizados que se adapten a tu propia historia.<br></br>
            <br></br>
            Después de 9 años de experiencia, me he dedicado a perfeccionar cada detalle para que
            lleves algo duradero y de calidad. Me aseguro que lleguemos a una co-creación de tu visión y
            de mi estilo artístico.</p>
          <br></br>
             </div>
        <div className='FotoContacto'>
          <img className='imgcontacto' src={FotoContactos} />
        </div>
      </div>
      

    </div>
  )
}

export default Contacto;