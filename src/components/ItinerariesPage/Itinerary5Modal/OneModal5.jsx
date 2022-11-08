import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const OneModal5 = (props) => {

   const handleOne5Close = () => props.setOne5Show(false);

   return (
      <>
      <Modal size='xl' show={props.one5Show} onHide={handleOne5Close}>
        <Modal.Header closeButton>
          <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY ONE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>GOLFO DI OROSEI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Despite spending all my summers in Italy ever since I was a child, I only visited the Golfo di Orosei for the first time this year, and I can honestly say it's one of the most spectacular places I've ever seen.
            Imagine a gulf 20km wide, with dramatic tall cliffs, mysterious caves, white sand beaches and crystal clear turquoise water. It's an incredibly scenic place, and one that will leave you speechless.
            This part of Sardinia is very wild, and you can only reach most beaches by boat (or hike for 1-3 hours).
        <Row>
           <Col sm={6}>
           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/2876750/pexels-photo-2876750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           </Col>
           <Col sm={6}>
           <Image className='mt-4' src={'https://images.pexels.com/photos/2105834/pexels-photo-2105834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           </Col>
        </Row>
            
     
             
   
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default OneModal5