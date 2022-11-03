import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal5 = (props) => {

   const handleSeven5Close = () => props.setSeven5Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven5Show} onHide={handleSeven5Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CINQUE TERRE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Today, tour the Cinque Terre. You can tour the Cinque Terre by train, bus, boat, or by foot.
           Hiking from town to town is one of the best ways to experience the Cinque Terre. Exploring each of the towns is wonderful, but some of the best views of the Cinque Terre come from the hiking trails. And since the train also connects all five towns, you don't need to hike the entire distance. You can mix it up, alternating between using the trains and the hiking trails to get between the towns.
           If you choose to hike the entire distance, it is 11 km one way and takes about 5 hours, not including time to explore each town.
           In order to hike the trail, you have to purchase a ticket. There are various options for this, but the ticket is absolutely necessary. At every town we had to pass a checkpoint and show our tickets. We purchased the Treno Cinque Terre Card, which gave us unlimited trips on the trains for the day and access to the hiking trails.
           If the idea of hiking from town to town does not sound like your idea of fun, you can purchase a train ticket and use the train to hop from town to town. You can also take a guided tour from La Spezia where you visit several of the towns with an experienced guide or a private tour where you can customize your itinerary.
          
           <Row>
            <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117482/pexels-photo-11117482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117548/pexels-photo-11117548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={12}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/4819300/pexels-photo-4819300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
          
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SevenModal5