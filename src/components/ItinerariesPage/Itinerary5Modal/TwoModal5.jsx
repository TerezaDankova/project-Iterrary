import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal5 = (props) => {

   const handleTwo5Close = () => props.setTwo5Show(false);

   return (
      <>
       <Modal size='xl' show={props.two5Show} onHide={handleTwo5Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CALA LUNA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
          One of the wonders of the Gulf of Orosei, as well as the symbol of the eastern coast of Sardinia. Cala Luna is located half way between the territories of Baunei and 
          Dorgali and is characterized by the mouth of the Codula di Luna torrent. Sheer rock faces protect and frame the cove, dotted with shady, spacious natural caves that offer shelter from the sun in the hottest months.
          The golden beach in the centre of the cove is washed by theclear blue, sea.
          It is particularly popular with recreational underwater fishing enthusiasts or people who simply want to take a dip in its waters. It is equipped with a bar, a place for dining/refreshments and has shallow waters 
          that makes it easy for children to play in the sea. The beach can be reached via sea, by boat, such as the boats departing from the nearest tourist ports (Cala Gonone, Santa Maria Navarrese and Arbatax). 
          For trekking enthusiasts, the beach can be reached via a difficult trail (suitable for real experts), leaving from Cala Fiuli (Dorgali) or from Baunei.
        
           <Row className='my-3'> 
               <Col sm={12}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/11670124/pexels-photo-11670124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/6749324/pexels-photo-6749324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>

        


           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal5