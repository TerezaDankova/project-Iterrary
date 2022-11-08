import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal4 = (props) => {

   const handleFour4Close = () => props.setFour4Show(false);

   return (
      <>
       <Modal size='xl' show={props.four4Show} onHide={handleFour4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>PISA</div>
            <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           If you want to see the Leaning Tower of Pisa, it is easy to add on to today's itinerary. Take the train from Florence to Pisa, store your luggage in the luggage storage center in the 
           Pisa train station, and spend a few hours visiting Pisa. The city is also home to the University of Pisa, which has a history going back to the 12th century, the Scuola Normale Superiore 
           di Pisa, founded by Napoleon in 1810, and its offshoot, the Sant'Anna School of Advanced Studies. The tower began to lean during construction in the 12th century, due to soft ground which 
           could not properly support the structure's weight. It worsened through the completion of construction in the 14th century. By 1990, the tilt had reached 5.5 degrees. The structure was 
           stabilized by remedial work between 1993 and 2001, which reduced the tilt to 3.97 degrees. Retrieve your luggage and then take a second train to the Cinque Terre.
          <Row>
               <Col sm={6}>
                  <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846210/pexels-photo-4846210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
                  <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846522/pexels-photo-4846522.jpeg?auto=compress&cs=tinysrgb&w=1600'} fluid/>
               </Col>
           </Row>
           
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal4