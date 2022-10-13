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
 
         <Container className='home' fluid>
            <Row >
            <h1 style={{textAlign: "center"}}> Are you ready for your next adventury?</h1>
            <h5>
               We are luxury travel planning service creating life-changing journey's throughout Italy.
            </h5>
            </Row>
            <Row>
            <Button className="my-5 mx-5" variant="light"
               onClick={goToItinerariesPage}
            > SHOW ITINERARIES 
            </Button>
            </Row>
         </Container>
    
 )
}
export default Home 