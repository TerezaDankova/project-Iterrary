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
         
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>STINTINO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            On your second day in Stintino another must-see is doing a boat tour to Asinara Island. Here you will spend an awesome day exploring hidden coves, swimming in turquoise water and exploring the now abandoned jail of Asinara Island.
            Best tours in Stintino
            The only must-do tour in this part of Sardinia is this epic Asinara Island Tour.

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