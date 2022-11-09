import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal6 = (props) => {

   const handleSix6Close = () => props.setSix6Show(false);

   return (
      <>
       <Modal size='xl' show={props.six6Show} onHide={handleSix6Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>MATERA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           I visited Matera for the first time in 2020, and it made me wonder why I waited so long to discover this gorgeous Italian town. From “Shame of Italy” to European Capital of Culture, Matera has come a long way.
           The Sassi of Matera, the ancient cave network turned into traditional houses of the town, are the main attraction and a unique sight. Walking amongst the cobbled streets of the Sassi feels like stepping back in time.

            <Row>
             <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846210/pexels-photo-4846210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846522/pexels-photo-4846522.jpeg?auto=compress&cs=tinysrgb&w=1600'} fluid/>
             </Col>
           </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal6