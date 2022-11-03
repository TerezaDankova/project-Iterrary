import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal8 = (props) => {

   const handleFive8Close = () => props.setFive8Show(false);

   return (
      <>
       <Modal size='xl' show={props.five8Show} onHide={handleFive8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>TUSCANY DAY TRIP</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Today, day trip into Tuscany. There are several ways to do this. You can book a tour, hire a driver, rent a car and set out on your own, or visit one or two towns by bus.
           We toured Tuscany by bus and by rental car. The bus was a nightmare, at least when we did it in 2014. At several locations, the buses failed to show up, leaving us (and many other travelers) stranded at the bus stations for hours. Renting a car for the day is more expensive, but we had a lot more freedom and we could visit towns that buses do not travel to.
           Traveling by a small group tour is a nice way to go. For a little more money, hiring a driver is a great way to tour Tuscany.
          
         
           <Row>
             <Col sm={12}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7605106/pexels-photo-7605106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7717808/pexels-photo-7717808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={12}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/4186555/pexels-photo-4186555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
           

         

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal8