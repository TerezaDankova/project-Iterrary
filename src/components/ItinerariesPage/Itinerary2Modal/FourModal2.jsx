import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal2 = (props) => {

   const handleFour2Close = () => props.setFour2Show(false);

   return (
      <>
       <Modal size='xl' show={props.four2Show} onHide={handleFour2Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>POMPEII AND SORRENTO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           In this day, you will visit Pompeii in transit between Rome and Sorrento. This is relatively easy to do. From Rome, take the train to Naples (70 minutes). Once in Naples you will transfer to the Circumvesuviana train. 
           You can purchase tickets right before boarding the Circumvesuviana train so there is no need to buy them in advance. It takes 36 minutes to travel from Naples to Pompeii (get off at the Pompeii Scavi station).
           While touring Pompeii, you can store your luggage in the luggage storage facility on the lower level of the Pompeii Scavi station.
           After touring Pompeii, pick up your luggage and then take the Circumvesuviana train to Sorrento. Most likely you are arriving in the mid to late afternoon. After checking into your hotel (your home base for 3 nights), 
           stroll along the marina, have dinner, and try the limoncello…it's delicious!
           <Image className='mt-3' src={'https://images.pexels.com/photos/8912460/pexels-photo-8912460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           <Row>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12063879/pexels-photo-12063879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12063869/pexels-photo-12063869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal2