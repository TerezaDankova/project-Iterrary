import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const ThreeModal3 = (props) => {

   const handleThree3Close = () => props.setThree3Show(false);

   return (
      <>
      <Modal size='xl' show={props.three3Show} onHide={handleThree3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY THREE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>DOLOMITES</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            The Dolomites are one of the most gorgeous spots in Italy that we have seen. This is hiking paradise. There are numerous trails, from short easy hikes to all day affairs. The views are spectacular, and you don't have to be a hiker to enjoy a trip here.
            In the Dolomites, the two most popular towns to base yourself are Selva di Val Gardena and Cortina d'Ampezzo. It takes about 2.5 hours to get to either town from Venice. Later, when you transfer to Verona, it is a 2.25-hour drive from Bolzano and a 3.5-hour 
            drive from Cortina d'Ampezzo. The drive from both locations is gorgeous.
           <Row className=''> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/1624445/pexels-photo-1624445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12366046/pexels-photo-12366046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12366089/pexels-photo-12366089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/2223082/pexels-photo-2223082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>

           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default ThreeModal3