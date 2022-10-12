import React from 'react';
import { Image,Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./css/Home.css"

const Home = () => {

   const navigate = useNavigate();
   const goToItinerariesPage = () => {
      navigate("/itineraries")
   }
 return (
      <div className="home">
         <Image src="https://images.pexels.com/photos/3791007/pexels-photo-3791007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         <Container className='text mx-5'
         >
            <Row className='mx-5'>
             Luxury travel planning service creating life-changing journey's throughout Italy.
            </Row>
            <Row>
            <Button className="my-5 mx-5" variant="light"
               onClick={goToItinerariesPage}
            > SHOW ITINERARIES 
            </Button>
            </Row>
         </Container>

        
      </div>

 )
}
export default Home 