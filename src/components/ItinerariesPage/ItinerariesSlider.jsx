import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode"
import { Container } from 'react-bootstrap';

import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./ItinerariesSliderCard.css"
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'



const ItinerariesSlider = () => {

   const navigate = useNavigate();
   const goToItinerary1Page = () => {
      navigate("/itinerary1")
   }
   const goToItinerary2Page = () => {
      navigate("/itinerary2")
   }
   const goToItinerary3Page = () => {
      navigate("/itinerary3")
   }
   const goToItinerary4Page = () => {
      navigate("/itinerary4")
   }
   const goToItinerary5Page = () => {
      navigate("/itinerary5")
   }
   const goToItinerary6Page = () => {
      navigate("/itinerary6")
   }
   const goToItinerary7Page = () => {
      navigate("/itinerary7")
   }
   const goToItinerary8Page = () => {
      navigate("/itinerary8")
   }

  return (
   <Container className='mt-5 mb-5 mx-auto' fluid>
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
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/4846247/pexels-photo-4846247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}  onClick={goToItinerary1Page} />
                     <Card.Title className='card-title' style={{top: '30%'}}>
                           <div> ROME </div>
                           <div> CINQUE TERRE </div>
                           <div> MILAN </div>
                           <div> VENICE </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 10 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary1Page}
               > DISCOVER MORE </Button>
            </Card>
         </SwiperSlide>
         <SwiperSlide>
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}  onClick={goToItinerary2Page}/>
                      <Card.Title className='card-title' style={{top: '35%'}}>
                        <div> ROME </div>
                        <div> FLORENCE </div>
                        <div> THE MALFI COAST </div>
                     </Card.Title>
                     <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 10 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary2Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide> 
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/9148687/pexels-photo-9148687.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} onClick={goToItinerary3Page} />
                     <Card.Title className='card-title' style={{top: '30%'}}>
                        <div> VENICE </div>
                        <div> DOLOMITES </div>
                        <div> VERONA </div>
                        <div> SAN MARINO </div>
                        <div> TUSCANY </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 10 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary3Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide>     
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/13567852/pexels-photo-13567852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}  onClick={goToItinerary4Page} />
                     <Card.Title className='card-title' style={{top: '35%'}}>
                        <div> CINQUE TERRE </div>
                        <div> TUSCANY </div>
                        <div> LAKE COMO </div>
                        <div> TRENTINO </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 7 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary4Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide>       
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/1615677/pexels-photo-1615677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}  onClick={goToItinerary5Page}/>
                     <Card.Title className='card-title' style={{top: '30%'}}>
                        <div> GOLFO DI OROSEI </div>
                        <div> PALAU </div>
                        <div> STINTINO </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 7 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary5Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide>          
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/9869786/pexels-photo-9869786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} onClick={goToItinerary6Page} />
                     <Card.Title className='card-title' style={{top: '30%'}}>
                        <div> ROME </div>
                        <div> NAPLES </div>
                        <div> AMALFI COAST </div>
                        <div> MATERA </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 7 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary6Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide>    
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/10906342/pexels-photo-10906342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} onClick={goToItinerary7Page}/>
                     <Card.Title className='card-title' style={{top: '30%'}}>
                        <div> CATANIA </div>
                        <div> ETNA </div>
                        <div> TAORMINA </div>
                        <div> NOTO </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 7 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary7Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
         <SwiperSlide>   
            <Card className='card-size'>
               <Card.Img className="card-image" variant='top' 
               src={'https://images.pexels.com/photos/6694379/pexels-photo-6694379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} onClick={goToItinerary8Page}/>
                     <Card.Title className='card-title' style={{top: '35%'}}>
                        <div> CAGLIARI </div>
                        <div> OLBIA </div>
                        <div> ALGHERO </div>
                     </Card.Title>
               <div className='card-text'>
                     <div className='marker'> <MdIcons.MdOutlineAirplanemodeActive size={18}/> </div>
                     <div className='circle'> <BsIcons.BsCircle size={50}/></div>
                     <div className='daysText'> 7 DAYS TRIP </div>
               </div>
               <Button size='sm' className="btn-slider" variant="light" 
               onClick={goToItinerary8Page}
               > DISCOVER MORE </Button>
            </Card>  
         </SwiperSlide>
      </Swiper>
   </Container>
  )
}

export default ItinerariesSlider