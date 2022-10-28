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
            <div className='box'>
            <Row className='mx-5 mb-5' >
               <Col sm={12}>
                     <h2 className='main-text' style={{textAlign: "center"}}> ARE YOU READY FOR YOUR NEXT ADVENTURE?</h2>
               </Col>
               <Col sm={12}>
                     <h6 className='main-text'>
                        HERE YOU CAN FIND AN INSPIRATION FOR YOUR NEXT TRIP AROUND ITALY!
                     </h6>
               </Col>
               <Col sm={12}>
                     <Button className="button-home mt-3"  variant="dark"
                        onClick={goToItinerariesPage}
                     > SHOW ITINERARIES 
                     </Button>
               </Col>
            </Row>
            </div>
       
             
         </Container>
 )
}
export default Home 