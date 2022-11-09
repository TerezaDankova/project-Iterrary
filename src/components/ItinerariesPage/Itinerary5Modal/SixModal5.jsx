import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal5 = (props) => {

   const handleSix5Close = () => props.setSix5Show(false);

   return (
      <>
       <Modal size='xl' show={props.six5Show} onHide={handleSix5Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
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
            This is another part of Sardinia that I only recently explored. Less fancy than the Palau area, but not as wild as the Golfo di Orosei, the area around Stintino is home to some incredible beaches.
            By far the most famous beach in the area is La Pelosa; a huge beach with a characteristic Sardinian “nuraghe” overlooking it, soft white sand and an incredibly clear turquoise water.
            You’ll make the most of this beach if you’re visiting Sardinia in the low season, as it can get incredibly busy in summer. You can spend a day at La Pelosa beach and then head to the Capo Caccia cliffs for a DIY sunset aperitivo.
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
export default SixModal5