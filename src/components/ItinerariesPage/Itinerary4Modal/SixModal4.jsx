import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal4 = (props) => {

   const handleSix4Close = () => props.setSix4Show(false);

   return (
      <>
       <Modal size='xl' show={props.six4Show} onHide={handleSix4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>TRENTINO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Regardless of whether you're visiting in Italy in winter or summer, the Italian Alps and Trentino deserve a visit.
            They're perfect in winter for skiers and snow sports fans, whilst in summer they're ideal for hikers, cyclers and mountain lovers.


            <Row>
            <Col sm={6}>
               <Image className='mt-5 mb-3' src={'https://images.pexels.com/photos/11305188/pexels-photo-11305188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11289357/pexels-photo-11289357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal4