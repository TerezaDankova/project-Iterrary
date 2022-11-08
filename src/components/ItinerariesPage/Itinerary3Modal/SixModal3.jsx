import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal3 = (props) => {

   const handleSix3Close = () => props.setSix3Show(false);

   return (
      <>
       <Modal size='xl' show={props.six3Show} onHide={handleSix3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
     
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>SAN MARINO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            In the morning drive to San Marino (3 hours, mostly on the highway). You will have the rest of the day to explore this gorgeous, underrated destination in Europe.
            La Repubblica di San Marino si trova a meno di 10 chilometri dalla Riviera Romangola, luogo per eccellenza del turismo estivo e delle vacanze al mare.
            Un panorama suggestivo sulla costa Adriatica, 9 castelli ricchi di storia e bellezze artistiche, un'atmosferma medievale che percorre tutte le strade e i vicoli della 
            Repubblica. E poi: musei, monumenti, piazze ma anche negozi, mercatini, parchi divertimenti.
            Sono tante le cose da vedere a San Marino, per un viaggio nel tempo e nelle diverse attrazioni che ti conquisterà.

            <Row>
             <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/6246186/pexels-photo-6246186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal3