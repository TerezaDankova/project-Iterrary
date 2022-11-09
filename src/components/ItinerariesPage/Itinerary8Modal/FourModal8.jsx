import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal8 = (props) => {

   const handleFour8Close = () => props.setFour8Show(false);

   return (
      <>
       <Modal size='xl' show={props.four8Show} onHide={handleFour8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>OLBIA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           The fifth day will be spent heading towards Olbia. You can stop and visit some unique villages along the way: first on the list is Orgosolo, in the heart of Barbagia, famous for its amazing street art; its murals are well worth some of your time – and so is the local food.
           The second stop would be Lollove, another abandoned village – even if, to be fair, it still counts about 15 inhabitants – that is nothing but pretty, almost stuck in time. And the same goes for Posada, another medieval gem with a beautiful castle on top of the hill where it’s built: this would be your third stop of the day before reaching Olbia and exploring a little of the city before heading to sleep.

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal8