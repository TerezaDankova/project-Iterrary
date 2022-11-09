import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal7 = (props) => {

   const handleSeven7Close = () => props.setSeven7Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven7Show} onHide={handleSeven7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           On your last day in Sicily, you’ll want to fit in a few last authentic foods, experiences and sights. Depending on your departure time, you should be able to squeeze in a couple of wonderful things.

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ACI CASTELLO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Since you’ve already been to Catania and you still have the car rental, drive to Aci Castello, which is just 20 minutes from the city. This interesting commune developed around a castle perched on the rocks by the sea.
            For the Game of Thrones fans, it might remind you of Dragonstone (that’s the impression I got anyway)!
            The castle was built almost one thousand years ago. And with the water beside it, which has been there since its construction, it’ll take you back in time.
            This dramatic view is not all that the castle offers, since it’s also home to an exhibition on past battles and sieges.
            If at this point you might be feeling rather peckish. Pop into Caffè & Dolcezze Pastry Shop for a couple of tasty baked goods.
            They focus on Sicilian flavours, so it’s a great opportunity to try some local specialities. Their panzerotti, arancini and cassata are particularly wonderful
           <Row>
            <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117482/pexels-photo-11117482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/11117548/pexels-photo-11117548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ACIREALE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            If you still have a little time before your flight, drive down to Acireale. This coastal commune is located at the foot of Mount Etna and is extremely picturesque.
            The local life is vibrant and the historical architecture is elegant and impressive.
            The Cathedral of Acireale is a great central place to explore the town from. It’s also a great last catholic church to add to your Sicilian sights.
            The inside is not that impressive, so you can simply admire it from the outside before wandering the streets until it’s time to catch your flight.
          
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SevenModal7