import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TenModal = (props) => {

   const handleTenClose = () => props.setTenShow(false);

   return (
      <>
       <Modal size='xl' show={props.tenShow} onHide={handleTenClose}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>TRAVEL HOME</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Today, fly home or continue on to your next destination.

               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/249581/pexels-photo-249581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
         
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TenModal