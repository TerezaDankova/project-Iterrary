import { Container, ListGroup } from 'react-bootstrap';

const ItineraryContainer = () => {



  return (
<Container>
   <h1 className="my-3" style={{textAlign: "center"}}> TRIP ITINERARY LIST </h1>
   <h6 style={{textAlign: "center"}}>title</h6>
   <ListGroup className='justify-content-center my-3' horizontal>
      <ListGroup.Item>Numbers</ListGroup.Item>
   </ListGroup>
   <div className="my-5" style={{textAlign: "center"}} >
      Map
   </div>
   <div className="my-5" style={{textAlign: "center"}}>
      Details
   </div>
</Container>
  )
}

export default ItineraryContainer