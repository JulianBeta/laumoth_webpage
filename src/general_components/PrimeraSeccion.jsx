import React from 'react'
import bannerimag1 from './../assets/bannerimag1.jpg'
import bannerimag2 from './../assets/bannerimag2.jpg'
import bannerimag3 from './../assets/bannerimag3.jpg'
import bannerimag4 from './../assets/bannerimag4.jpg'
import bannerimag5 from './../assets/bannerimag5.jpg'
import './../styles/SeccionPrimera.css'

const BannerIncio = () => {
   return (
    <div className='ContenedorBanner' id='inicio'>
    <a></a>
      <img src={bannerimag1} />
      <img src={bannerimag2} />
      <img src={bannerimag3} />
      <img src={bannerimag4} />
      <img src={bannerimag5} />
    </div>
  )
}

export default BannerIncio;




