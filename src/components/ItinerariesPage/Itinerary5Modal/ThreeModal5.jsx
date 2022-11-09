import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const ThreeModal5 = (props) => {

   const handleThree5Close = () => props.setThree5Show(false);

   return (
      <>
      <Modal size='xl' show={props.three5Show} onHide={handleThree5Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY THREE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>PALAU</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
          This is the place where I have spent all my summers since I was 1 month old. I may be a little biased, but I believe it’s home to some truly gorgeous beaches and deserves at least three full days of your Italy itinerary.
          You need to spend one day doing a boat tour of the Arcipelago della Maddalena, to the islands of Spargi, Budelli, Santa Maria and Razzoli. I say need because these islands are truly stunning.
          Imagine picture perfect white sand beaches with crystal clear turquoise water, surrounded by pink granite rocks. The tours usually spend the whole day at the islands, beach hopping between different hidden coves.

           <Row className=''> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/8140617/pexels-photo-8140617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/10385997/pexels-photo-10385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/3329203/pexels-photo-3329203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/4916697/pexels-photo-4916697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default ThreeModal5