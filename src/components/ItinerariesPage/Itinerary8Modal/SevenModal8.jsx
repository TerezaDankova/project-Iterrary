import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal8 = (props) => {

   const handleSeven8Close = () => props.setSeven8Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven8Show} onHide={handleSeven8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CAGLIARI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           From Laconi, the drive back to Cagliari will take you roughly 1.30 hours so depending on what time your flight is you may enjoy some attractions along the way such as Su Nuraxi, Sardinia’s most famous nuraghe in Barumini.

   
               <Image className='mt-3' src={'https://images.pexels.com/photos/4819300/pexels-photo-4819300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SevenModal8