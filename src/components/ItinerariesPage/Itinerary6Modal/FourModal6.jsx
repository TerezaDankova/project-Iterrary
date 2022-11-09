import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal6 = (props) => {

   const handleFour6Close = () => props.setFour6Show(false);

   return (
      <>
       <Modal size='xl' show={props.four6Show} onHide={handleFour6Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
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
          You can go on a boat trip to Capri, or explore the beautiful town of Positano. History lovers can pay a visit to the ruins of Pompei, and maybe even hike up Mount Vesuvius.
          With so many gorgeous beaches in the area, you can spend three days alternating between sightseeing and relaxing on a beautiful white sand beach. And of course, you have to taste the real pizza napoletana!
       
           <Row>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/13616781/pexels-photo-13616781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12406725/pexels-photo-12406725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal6