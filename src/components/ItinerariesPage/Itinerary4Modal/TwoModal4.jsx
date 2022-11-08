import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal4 = (props) => {

   const handleTwo4Close = () => props.setTwo4Show(false);

   return (
      <>
       <Modal size='xl' show={props.two4Show} onHide={handleTwo4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
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
            Cinque Terre (or Five Lands in English) is the name given to the five towns of Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore. These are the most iconic towns in the area, which give the name to the national park.
            There is a beautiful 12.5km hiking trail called Il Sentiero Azzurro (Blue Path) that connects all five towns. It has gorgeous views over the towns, the cliffs and sea, which make it one of the most beautiful hikes in the world.
            Although you might see many photos on Instagram of girls twirling in colourful dresses here, don't let that fool you. The Sentiero Azzurro can be a tough hike, and you will need all your usual hiking essentials.

           <Row className='my-3'> 
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/5593538/pexels-photo-5593538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/5593539/pexels-photo-5593539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>   
            </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal4