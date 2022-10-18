import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode"
import ItinerariesSliderCard from './ItinerariesSliderCard';
import { Container } from 'react-bootstrap';
import Itinerary from '../../pages/Itinerary';

const ItinerariesSlider = () => {
  return (
   <Container className='my-5 mx-auto' fluid>
      <Swiper
      FreeMode={true}
      grabCursor={true}
      className="mySwiper"
      // slidesPerView={3}
      // spaeBetween={20}
      breakpoints={{
         O: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 0,
         }, 
         768: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 20,
         },   
         1280: {
            slidesPerView: 4,
            spaceBetween: 20,
         }
      }}
      >
         <SwiperSlide>
         <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/4846247/pexels-photo-4846247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
             title: "ROME FLORENCE VERONA VENICE", 
             text: "10 days trip"
            }}/>   
         </SwiperSlide>
         <SwiperSlide>
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/13567852/pexels-photo-13567852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" , 
             title: "hello", 
             text: "this is it"
            }}/>                    
         </SwiperSlide>
         <SwiperSlide> 
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/13813574/pexels-photo-13813574.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" , 
             title: "hello", 
             text: "this is it"
            }}/>     
         </SwiperSlide>
         <SwiperSlide>     
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/13793599/pexels-photo-13793599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" , 
             title: "hello", 
             text: "this is it"
            }}/>     
         </SwiperSlide>
         <SwiperSlide>       
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" , 
             title: "hello", 
             text: "this is it"
            }}/>
         </SwiperSlide>
         <SwiperSlide>          
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/12637112/pexels-photo-12637112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , 
             title: "hello", 
             text: "this is it"
            }}/>
         </SwiperSlide>
         <SwiperSlide>    
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/10692591/pexels-photo-10692591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , 
             title: "hello", 
             text: "this is it"
            }}/>
         </SwiperSlide>
         <SwiperSlide>   
            <ItinerariesSliderCard data={{
             imgSrc: "https://images.pexels.com/photos/4819574/pexels-photo-4819574.jpeg?auto=compress&cs=tinysrgb&w=1600" , 
             title: "hello", 
             text: "this is it"
            }}/>
         </SwiperSlide>
      </Swiper>
   </Container>
  )
}

export default ItinerariesSlider