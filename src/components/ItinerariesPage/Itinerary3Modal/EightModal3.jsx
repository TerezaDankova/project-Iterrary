import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const EightModal3 = (props) => {

   const handleEight3Close = () => props.setEight3Show(false);

   return (
      <>
       <Modal size='xl' show={props.eight3Show} onHide={handleEight3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY EIGHT</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>MILAN</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           On this 10 day Italy itinerary, you have this afternoon and tomorrow in Milan.
           We did this and it worked very well. We took an early morning train to Milan, spent several hours in Milan, and then took an afternoon train to Venice.
           There are two main places to visit in Milan if you just have a few hours. Visit the Duomo and walk on the rooftop and see Da Vinci's Last Supper at the convent of Santa Maria delle Grazie. 
           The city's role as a major political centre dates back to the late antiquity, when it served as the capital of the Western Roman Empire, while from the 12th century until the 16th century, Milan was one of the largest European cities, and a major 
           trade and commercial centre, consequently becoming the capital of the Duchy of Milan, which was one of the greatest political, artistic and fashion forces in the Renaissance. 
           Despite losing much of its political and cultural importance in the early modern period, the city regained its status as a major economic and political centre, being considered today as the industrial and financial capital of Italy.
           <Row>
             <Col sm={12}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/4329779/pexels-photo-4329779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/4514080/pexels-photo-4514080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/3365196/pexels-photo-3365196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
         
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default EightModal3