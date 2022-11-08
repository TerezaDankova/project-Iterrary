import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal3 = (props) => {

   const handleFive3Close = () => props.setFive3Show(false);

   return (
      <>
       <Modal size='xl' show={props.five3Show} onHide={handleFive3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VERONA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Verona is gorgeous, similar to Venice except without the canals, the decay, and the huge numbers of tourists.
            This is another one of those cities that is perfect for getting lost in (and eating a lot of gelato). Enjoy this low-key day exploring this beautiful city.
            It is one of the main tourist destinations in northern Italy because of its artistic heritage and several annual fairs and shows as well as the opera season 
            in the Arena, an ancient Roman amphitheater.
            Between the 13th and 14th century the city was ruled by the della Scala Family. Under the rule of the family, in particular of Cangrande I della Scala, 
            the city experienced great prosperity, becoming rich and powerful and being surrounded by new walls. The Della Scala era is survived in numerous monuments around Verona.

               <Image className='mt-3' src={'https://images.pexels.com/photos/6289885/pexels-photo-6289885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>PIAZZA DELLE ERBE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            The square's most ancient monument is the fountain (built in 1368 by Cansignorio della Scala), 
            surmounted by a statue called Madonna Verona, which is however a Roman sculpture dating to 380 AD. Also historical is the capitello, dating to the 13th century, 
            during which it was used for several ceremonies, including the oath of investment of the city's medieval podestà and pretors. Towards Via Cappello is another column, 
            with a 14th-century aedicula with reliefs of the Virgin and the Saints Zeno, Peter and Christopher.
            <Row>
               <Col sm={6}>
                  <Image className='mt-4' src={'https://images.pexels.com/photos/12935832/pexels-photo-12935832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
                  <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/12935827/pexels-photo-12935827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal3