import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal2 = (props) => {

   const handleSix2Close = () => props.setSix2Show(false);

   return (
      <>
       <Modal size='xl' show={props.six2Show} onHide={handleSix2Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>AMALFI COAST</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            From Sorrento, take a day trip to the Amalfi Coast. This is described as one of the most scenic drives in the world. Along the way, visit the towns of Positano, Amalfi, and Ravello.
            The best way to get around is by private driver. Parking can be a huge hassle (avoid self-driving the Amalfi Coast during peak season) and using the public bus system can be a nightmare 
            (been there, done that, and we had a miserable experience).

            <Row>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/2675282/pexels-photo-2675282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-5 mb-3' src={'https://images.pexels.com/photos/5864071/pexels-photo-5864071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal2