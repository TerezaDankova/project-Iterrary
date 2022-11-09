import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal6 = (props) => {

   const handleFive6Close = () => props.setFive6Show(false);

   return (
      <>
       <Modal size='xl' show={props.five6Show} onHide={handleFive6Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>AMALFI COAST</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Celebrated worldwide for its Mediterranean landscape and natural diversity, the Coast is named after the town of Amalfi, which makes up its main historical and political centre. It is a very popular jet set destination, and has been an attraction to upper-class Europeans since the 18th century, when it was a frequent stopover on their Grand Tours. An attraction to thousands of international tourists of all classes annually,[1] the Amalfi Coast was listed as a UNESCO World Heritage Site in 1997.
         
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
export default FiveModal6