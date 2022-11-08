import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal3 = (props) => {

   const handleTwo3Close = () => props.setTwo3Show(false);

   return (
      <>
       <Modal size='xl' show={props.two3Show} onHide={handleTwo3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/1488017/pexels-photo-1488017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
         <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CRUISE THE CANALS</div>
               <hr  style={{
                     color: '#000000',
                     height: .5,
                     borderColor : '#000000',
                     marginTop: '-2px'
                  }}/>
   
           In this day, you can cruise the canals of Venice. There are several ways to do this.
           Drifting through the canals of Venice in a gondola might seem very touristy, but we do it every time we are here and always have a great experience. Gondola rides typically last 30 to 60 minutes.
           The city of Venice sets the rate at €80 per 40 minutes (€100 after 7 pm) but that doesn't mean that's the rate you will get. You will have to negotiate with your gondolier before you ride. 
           Make sure you agree on the price and the length of time you will ride before you get in the gondola.
           As you walk through Venice, you will see gondolas for hire at various points throughout the city.
           Traveling by Vaporetto is a cheaper way to get great views of Venice. It is a water bus that is used to travel from point to point but it also is a great way to cruise the Grand Canal without spending a fortune.
           Take the No. 1 vaporetto (ACTV) Linea 1 from San Marco - San Zaccharia (St. Mark's Square) to Piazzale Roma. During the ride, you will see Ponte dell'Accademia, the Rialto Bridge, and the beautiful buildings that line the Grand Canal. 
           Since it is a water bus, you can get off whenever you see something of interest. And since it runs in both directions, so you can also ride it back to St. Mark's Square.

          <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/3791007/pexels-photo-3791007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal3