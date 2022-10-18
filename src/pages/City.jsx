import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const City = () => {
   const navigate = useNavigate()

   const goToAccommodationPage = () => {
      navigate("/accommodation")
    }
    
   
 return (
   <Container>
      <Row>
         <Col className="my-5" >
               <div style={{textAlign: "center", }}>
               Here will be informations about the city I clicked on.
               </div>
         </Col>
         <Col>
               <Button 
                        variant="outline-primary"
                                 style={{color: 'white', width: "200px", backgroundColor: "green", marginLeft: "-200px"}} 
                                 onClick={goToAccommodationPage}> 
                                 ACCOMMODATIONS
               </Button>
         </Col>
      </Row>
   </Container>
 )
}
export default City