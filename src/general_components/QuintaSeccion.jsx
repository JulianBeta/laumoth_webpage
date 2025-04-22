import React from 'react';
import './../styles/SeccionQuinta.css';
import cover1a from './../assets/cover1a.jpg';
import cover1b from './../assets/cover1b.jpg';
import piercing1 from './../assets/piercing1.jpg';
import piercing2 from './../assets/piercing2.jpg';
import tattoo2 from './../assets/tattoo2.jpg';
import tattoo1 from './../assets/tattoo1.jpg';


export default function Servicios() { 
  return (
    <div className='ContenedorServicios' id='servicios'>
      <h2 className='TituloServicios'>SERVICIOS</h2>
       <hr className="dividercel" />
       
       <div className='GaleriaServicios'>
        {/* First Service */}
       <div className='servicio'>
       <b><h3>Cubrimientos</h3></b>
          <p>Cuando ese tatuaje que tienes ya no te representa o quieres darle nueva vida, creamos una nueva composición que cubra muy bien el antiguo tatuaje.</p>
          <hr className="divider" />
          <div className='image-container'>
            <img 
              className='recuadroservicios' 
              src={cover1b} 
              alt="Cubrimientos" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={cover1a} 
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
              src={tattoo2} 
              alt="Tatuajes" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={tattoo1} 
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
              src={piercing1} 
              alt="Piercing" 
            />
            <img 
              className='recuadroservicios cover-image' 
              src={piercing2} 
              alt="Piercing Hover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}