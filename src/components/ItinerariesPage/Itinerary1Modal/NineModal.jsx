import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const NineModal = (props) => {

   const handleNineClose = () => props.setNineShow(false);

   return (
      <>
       <Modal size='xl' show={props.nineShow} onHide={handleNineClose}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY NINE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
          
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VENICE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Our favorite thing to do in Venice is to wander the canals, eat the food, and drink the coffee. But there are several wonderful sights to visit while you are here.
           Venice has been known as "La Dominante", "La Serenissima", "Queen of the Adriatic", "City of Water", "City of Masks", "City of Bridges", "The Floating City", and "City of Canals".
           The lagoon and a part of the city are listed as a UNESCO World Heritage Site. Although the city is facing some challenges (including an excessive number of tourists and problems caused by pollution, 
           tide peaks and cruise ships sailing too close to buildings), Venice remains a very popular tourist destination, a major cultural centre, and has been ranked many times the most beautiful city in the world.
           It has been described by The Times as one of Europe's most romantic cities and by The New York Times as "undoubtedly the most beautiful city built by man".
           <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/804954/pexels-photo-804954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ST. MARK'S BASILICA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           This cathedral dates back to the 9th century AD. Over the course of eight centuries, mosaics were added to the interior of the cathedral, as well as treasures from the Crusades. 
           The Pala d'Oro is a Byzantine alter piece that is covered in gold and studded with almost 2,000 gems.
           Lines can be very long to enter St. Mark's Basilica. Early morning is the best time to visit, when crowds are lower, but you can also skip the lines by taking a tour.
           <Row>
             <Col sm={12}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/847366/pexels-photo-847366.jpeg?auto=compress&cs=tinysrgb&w=1600'} fluid/>
             </Col>
           </Row>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>DOGE'S PALACE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span>10 am to 6 pm, last admission at 5 pm</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €25, audio guide €5</div>
           </div>
           On this 3-hour walking tour, visit St. Mark's Square, St. Mark's Basilica, and Doge's Palace with skip-the-line access and a knowledgeable guide.
           The Doges' Palace is a palace built in Venetian Gothic styles. For centuries, this building served as the residence for the Doge, the seat of the government, and a palace of justice. 
           Now, it is a museum. Again, expect large crowds of people and long ticket lines. You can tour the Palace on your own or book a guided tour.
           As you tour Doge's Palace, you will cross the Bridge of Sighs. From this window, prisoners on their way to execution would have one final view of the city.
           <Row>
             <Col sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/5784531/pexels-photo-5784531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col  className="mt-3" sm={6}>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/7231962/pexels-photo-7231962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/3790993/pexels-photo-3790993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
        
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>AFTERNOON: CRUISE THE CANALS</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           In the afternoon, cruise the canals of Venice. There are several ways to do this.
           Drifting through the canals of Venice in a gondola might seem very touristy, but we do it every time we are here and always have a great experience. Gondola rides typically last 30 to 60 minutes.
           The city of Venice sets the rate at €80 per 40 minutes (€100 after 7 pm) but that doesn't mean that's the rate you will get. You will have to negotiate with your gondolier before you ride. 
           Make sure you agree on the price and the length of time you will ride before you get in the gondola.
           As you walk through Venice, you will see gondolas for hire at various points throughout the city.
           Traveling by Vaporetto is a cheaper way to get great views of Venice. It is a water bus that is used to travel from point to point but it also is a great way to cruise the Grand Canal without spending a fortune.
           Take the No. 1 vaporetto (ACTV) Linea 1 from San Marco - San Zaccharia (St. Mark's Square) to Piazzale Roma. During the ride, you will see Ponte dell'Accademia, the Rialto Bridge, and the beautiful buildings that line the Grand Canal. 
           Since it is a water bus, you can get off whenever you see something of interest. And since it runs in both directions, so you can also ride it back to St. Mark's Square.
          <Image className='mt-4 mb-3' src={'https://images.pexels.com/photos/1488017/pexels-photo-1488017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default NineModal