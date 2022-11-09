import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal6 = (props) => {

   const handleSeven6Close = () => props.setSeven6Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven6Show} onHide={handleSeven6Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>MATERA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Matera is a small town, but in my opinion you need two full days to appreciate it. You can spend some time wandering around the cobbled streets, admiring the many beautiful churches, tasting the cuisine and hiking in the surrounding hills.
            The Sassi of Matera by night are an especially magical sight, with their soft golden light reflected on the white Italian marble.
          
          
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
export default SevenModal6