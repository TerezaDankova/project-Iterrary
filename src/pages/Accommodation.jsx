import React from 'react';
import { Container } from 'react-bootstrap';
import HotelsCard from '../components/AccommodationPage/HotelsCard';

const Accommodation = () => {
   
 return (
   <Container>
      <div className="my-5" style={{textAlign: "center"}}>
      Here will be informations about accommodations, I can book here also a hotel (best 10 hotels by using map over this card:).
      </div>
      <HotelsCard />
   </Container>
 )
}
export default Accommodation