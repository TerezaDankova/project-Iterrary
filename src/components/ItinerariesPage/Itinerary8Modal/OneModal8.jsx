import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const OneModal8 = (props) => {

   const handleOne8Close = () => props.setOne8Show(false);

   return (
      <>
      <Modal size='xl' show={props.one8Show} onHide={handleOne8Close}>
        <Modal.Header closeButton>
          <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY ONE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CAGLIARI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Your complete Sardinia itinerary will start from Cagliari. Once you have left the airport, find your way towards the city center – if you’re driving, it takes about seven minutes. If you’re relying on public transportation and plan on picking your car only once you leave Cagliari, Elmas airport has a train station linked to the city’s central terminal.
            You can spend your first day exploring the historical center – especially the four ancient districts (Marina, Stampace, Castello, and Villanova) where Cagliari’s most ancient history took place.
            The second day can be spent in the outer areas of the city, with a short trip to Cagliari’s beach (Poetto), trekking in Sella del Diavolo and/or Colle di Sant’Elia, where you will find important ruins such as the Fortino di Sant’Ignazio, an old fort that has been used for both military needs and as a hospital.
            You can also spend half a day in Molentargius, a nearby natural park that’s a safe haven for several protected and rare birds, such as the pink flamingoes.

            <Row className='my-3'> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/6765836/pexels-photo-6765836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>
           </Container>
        </Modal.Body>
        
      </Modal>
      </>
   )
}
export default OneModal8