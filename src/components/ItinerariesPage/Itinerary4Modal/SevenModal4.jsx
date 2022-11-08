import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal4 = (props) => {

   const handleSeven4Close = () => props.setSeven4Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven4Show} onHide={handleSeven4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CINQUE TERRE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Trentino is home to many of the best ski resorts in Italy. You can easily spend two days enjoying the beautiful nature and activities Trentino has to offer, while also tasting the delicious local cuisine.

           <Row>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/11034923/pexels-photo-11034923.jpeg'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/11141266/pexels-photo-11141266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
          
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SevenModal4