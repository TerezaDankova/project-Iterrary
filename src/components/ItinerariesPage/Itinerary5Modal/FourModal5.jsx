import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal5 = (props) => {

   const handleFour5Close = () => props.setFour5Show(false);

   return (
      <>
       <Modal size='xl' show={props.four5Show} onHide={handleFour5Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
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
          After that you can spend one day exploring the islands of Maddalena and Caprera, preferably by scooter. These islands are both quite wild, and make for awesome scooter rides as well as being home to gorgeous beaches.
          On your final day you can relax at one of the many beaches close to Palau, maybe go for a sunset hike to Capo d’Orso or go to Porto Pollo to enjoy a sunset drink while watching the windsurfers and kitesurfers zipping past.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4946835/pexels-photo-4946835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>


         

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal5