import React from 'react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/effectCoverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../styles/SeccionTercera.css'
import imagen1 from './../assets/galeriaesc1.png'
import imagen2 from './../assets/galeriaesc2.png'
import imagen3 from './../assets/galeriaescri3.png'
import imagen4 from './../assets/galeriaescri4.png'


const Galeria = () => {
  return (
    <div className="container">
      <h1 className="heading"></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'1'}
        touchAngle={0}
        touchEventsTarget='container'
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 1,
          stretch: 5,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
         clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
               
        <SwiperSlide>
         <img src={imagen1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
         <img src={imagen2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
         <img src={imagen3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
         <img src={imagen4} alt="slide_image" />
        </SwiperSlide>
        
       
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    
    </div> 
  );
}


export default Galeria;