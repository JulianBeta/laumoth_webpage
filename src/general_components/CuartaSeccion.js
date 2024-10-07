import React from 'react'
import Parche from './../assets/parche.jpg'
import Printmoth from './../assets/printmoth.jpg'
import Stickers from './../assets/stickers.jpg'
import './../styles/SeccionCuarta.css'


const Tienda = () => {
  return (
    <div className='ContenedorTienda'>
      <div className='TituloTienda'><h2 >Tienda</h2></div>
      <div className='GaleriaTienda' >
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Parche} alt='fotoparche'/><div className='textoproducto'><p>Nombre de producto</p><p>Precio</p></div></div>
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Printmoth} alt='Printmoth'/><div className='textoproducto'><p>Nombre de producto</p><p>Precio</p></div></div>
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Stickers} alt='Stickers'/><div className='textoproducto'><p>Nombre de producto</p><p>Precio</p></div></div>
      </div>
      <div className='BotonTienda'>
        <div className='CuadroFijo'>TODOS LOS PRODUCTOS SE COMPRAN DIRECTAMENTE VÍA WHATSAPP +0573168956823</div>
        <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button className='botonInstagram'>Comprar</button></a>


      </div>


    </div>
  )
}


export default Tienda;