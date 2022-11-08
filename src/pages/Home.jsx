import React from 'react';
import { Button, Container, Row, Col, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./css/Home.css"

const Home = () => {

   const navigate = useNavigate();
   const goToItinerariesPage = () => {
      navigate("/itineraries")
   }
   const goToRestaurantsPage = () => {
      navigate("/tripAdvisor")
   }
   
 return ( <>
         <Container className='home' fluid>
            <div className='box'>
            <Row className='mx-5 mb-5 '>
               <Col sm={12}>
                     <h2 className='main-text' style={{textAlign: "center", color: 'white'}}> ARE YOU READY FOR YOUR NEXT ADVENTURE?</h2>
               </Col>
               <Col sm={12}>
                     <h6 className='main-text'>
                        HERE YOU CAN FIND AN INSPIRATION FOR YOUR NEXT TRIP AROUND ITALY!
                     </h6>
               </Col>
               <Col sm={12}>
                     <Button className="button-home mt-3"  variant="outline-light"
                        onClick={goToItinerariesPage}
                     > SHOW ITINERARIES 
                     </Button>
               </Col>
            </Row>
            </div>
             
         </Container>
         <Container>
         <Row className='mt-5 mb-5'>
          <Col sm={6}>
                     <h2 className='food-text'> WHERE CAN YOU EAT LIKE YOU EAT IN ITALY?</h2>
                     <h6 className='food-text-small pr-5'>Italian cuisine is known around the world for dishes such as pizza and pasta, here you can find a top Italian restaurants.</h6>
                    <Col>
                     <Button className="button-restaurants mt-3" variant="outline-warning"
                        onClick={goToRestaurantsPage}
                     > SHOW RESTAURANTS
                     </Button>
                     </Col>
          </Col>
          <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} fluid/>
         </Col>
         <Col sm={12} className='mt-5 mb-5'>
            <div className='box-pasta'>
            <h6 className='text-pasta my-5 px-5'>The Italian dish par excellence, along with pizza, knows no foreign rivals. Pasta in Italy, no matter how you prepare it, is always excellent. Each region, even every city, has its typical condiments: pesto alla Genovese, amatriciana, norma, ragù. Four examples of an infinite list. And let's not forget the stuffed pasta, the great pride of our country! Give the pasta to the Italians and they will turn it into a masterpiece.
            </h6>
            </div>
         </Col>
         <Col sm={12}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/4819658/pexels-photo-4819658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} fluid/>
         </Col>
         <Col sm={12} className='mt-3 mb-3'>
            <div className='box-foody'>
            <h6 className='text-pasta my-5 px-5'>Why is Italian food the best? Because there really is something for every taste. Italy is a country much smaller than many others, but the gastronomic heritage it has to offer is so vast as to be envied by the rest of the world. And it is not difficult to understand how. 
            From north to south of the boot there are flavors and foods with ingredients of all kinds. What other country can boast such a variety of food, which includes Milanese cutlet, Parmigiano Reggiano, Fiorentina, Parma ham, ice cream, arancini…? Not to mention a good extra virgin olive oil, which to us seems so common but it isn't so common at all.
            </h6>
            </div>
         </Col>
         </Row>
         <Row>
               <Image className='mb-5' src={'https://images.pexels.com/photos/7464775/pexels-photo-7464775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
         </Row>
         </Container>
         </>
 )
}
export default Home 