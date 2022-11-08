import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const OneModal4 = (props) => {

   const handleOne4Close = () => props.setOne4Show(false);

   return (
      <>
      <Modal size='xl' show={props.one4Show} onHide={handleOne4Close}>
        <Modal.Header closeButton>
          <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY ONE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CINQUE TERRE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Cinque Terre is one of my favourite places in Italy. With its colourful houses, green hills and turquoise sea, it's one of the most picturesque places in Italy. It's also a great destination for hiking lovers.

            <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4819300/pexels-photo-4819300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           
            I recommend spending a whole day hiking the Sentiero Azzurro and exploring the cute town centres of the Cinque Terre towns.
            You can then spend the second day enjoying the beaches, hiking lesser known trails in the national park or discovering the nearby town of Porto Venere, often referred to as the Sixth Land but rarely present in Italy itineraries.
          
            <Row>
            <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117482/pexels-photo-11117482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117548/pexels-photo-11117548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
          
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default OneModal4