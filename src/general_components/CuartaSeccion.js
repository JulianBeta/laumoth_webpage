import React from 'react'
import Parche from './../assets/parche.jpg'
import Printmoth from './../assets/printmoth.jpg'
import Stickers from './../assets/stickers.jpg'
import './../styles/SeccionCuarta.css'


const Tienda = () => {
  return (
    <div className='ContenedorTienda'>
      <h2 className='TituloTienda'>Tienda</h2>
      <div className='GaleriaTienda'
      >
        <img className='ImagenesTienda' src={Parche} alt='fotoparche'/>
        <img className='ImagenesTienda' src={Printmoth} alt='Printmoth'/>
        <img className='ImagenesTienda' src={Stickers} alt='Stickers'/>
      </div>
      <div className='BotonTienda'>
        <div className='CuadroFijo'>TODOS LOS PRODUCTOS SE COMPRAN DIRECTAMENTE VÍA WHATSAPP +0573168956823</div>
        <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button className='botonInstagram'>Comprar</button></a>


      </div>


    </div>
  )
}


export default Tienda;