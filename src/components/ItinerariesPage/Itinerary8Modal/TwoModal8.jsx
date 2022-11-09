import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal8 = (props) => {

   const handleTwo8Close = () => props.setTwo8Show(false);

   return (
      <>
       <Modal size='xl' show={props.two8Show} onHide={handleTwo8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>OLIGASTRA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           On day 2, leave your hotel nice and early early and drive alongside State Road SS 125 Orientale Sarda, with destination Tortolì. Make a quick stop in Gairo Vecchia, an abandoned yet beautiful village that was partly destroyed by a flood; maybe have a picnic around there, the area isn’t short of pretty places where to sit and enjoy a sandwich.
           After lunch, get back on your car and find a beach to relax and sunbathe at – if the season and the weather allow it. There are plenty of nice places around Tortolì, such as Porto Frailis, Musculedda, and San Gemiliano beaches to just name a few.

           <Row className='my-3'> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/9869786/pexels-photo-9869786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/4558417/pexels-photo-4558417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/7464775/pexels-photo-7464775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>

        


           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal8