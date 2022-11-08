import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal2 = (props) => {

   const handleFive2Close = () => props.setFive2Show(false);

   return (
      <>
       <Modal size='xl' show={props.five2Show} onHide={handleFive2Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CAPRI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
              <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/2931007/pexels-photo-2931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
          
               Capri is just 20 minutes away from Sorrento by boat. Once in Capri, take a boat tour around the island, enjoy the breathtaking view from Mount Solaro, and explore the Grand Marina. You can even go hiking if you like. 
               Capri non è solo il nome dell'isola più celebre e visitata del Golfo di Napoli, ma anche quello di uno dei due comuni presenti sul territorio isola (il secondo si chiama Anacapri. Comprende alcuni dei siti più famosi dell'isola, 
               come la Piazzetta e i Faraglioni, ed offre una grande scelta di cose da visitare ed esperienze di ogni tipo: mare, trekking, musei e naturalmente le vie dello shopping più glamour e i caffè più frequentati dai turisti di tutto il mondo.
               Anche se la sua fama è in qualche modo condizionata dal mito delle boutique eleganti e dei super yacht milionari, il centro di Capri è anche uno scrigno di tesori artistici e culturali, testimonianza della lunga storia dell'isola e di quanto 
               il suo mito resista nei millenni (una visita accurata di Capri, che includa l'interno di musei e monumenti, richiede diversi giorni).

           <Row>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/14234430/pexels-photo-14234430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/13353618/pexels-photo-13353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
            </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal2