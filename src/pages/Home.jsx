import React from 'react';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./css/Home.css"

const Home = () => {

   const navigate = useNavigate();
   const goToItinerariesPage = () => {
      navigate("/itineraries")
   }
 return (
         <Container className='home' fluid>
            <Row className='mx-5 justify-content-center' >
               <Col sm={12}>
                     <h1 className='main-text' style={{textAlign: "center"}}> Are you ready for your next adventury?</h1>
               </Col>
               <Col sm={12}>
                     <h5 className='main-text'>
                        We are luxury travel planning service creating life-changing journey's throughout Italy.
                     </h5>
               </Col>
               <Col className="align-self-center">
              
                     <Button className="button-home my-5 " variant="light"
                        onClick={goToItinerariesPage}
                     > SHOW ITINERARIES 
                     </Button>
             
               </Col>
            </Row>
       
             
         </Container>
 )
}
export default Home 