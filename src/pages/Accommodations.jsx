import React from 'react';
import { Container } from 'react-bootstrap';
import HotelsCard from '../components/AccommodationPage/HotelsCard';

const Accommodations = () => {
   
 return (
   <Container>
      <div className="my-5" style={{textAlign: "center"}}>
      Here will be 10 best hotels in the town.
      </div>
      <HotelsCard />
   </Container>
 )
}
export default Accommodations