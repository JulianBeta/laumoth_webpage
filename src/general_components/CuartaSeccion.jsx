import React from 'react'
import Parche from './../assets/parche.jpg'
import Printmoth from './../assets/printmoth.jpg'
import Stickers from './../assets/stickers.jpg'
import './../styles/SeccionCuarta.css'


const Tienda = () => {
  return (
    <div className='ContenedorTienda' id='tienda'>
      <div ><b><h2 className='TituloTienda'>TIENDA</h2></b></div>
      <div className='GaleriaTienda' >
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Parche} alt='fotoparche'/><p>PRINT<br></br>COP $60.000</p></div>
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Printmoth} alt='Printmoth'/><p>PARCHE<br></br>COP $15.000</p></div>
        <div className='contenedorproductos'><img className='ImagenesTienda' src={Stickers} alt='Stickers'/><p>SET de 3 STICKERS<br></br>COP $10.000</p></div>
      </div>
      <div className='BotonTienda'>
        <div className='CuadroFijo'><h2 className='textocuadrocentralfijo'>TODOS LOS PRODUCTOS SE COMPRAN DIRECTAMENTE VÍA WHATSAPP +573168956823</h2></div>
        <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573168956823'><button className='botonInstagram'>COMPRAR</button></a>
      </div>


    </div>
  )
}


export default Tienda;