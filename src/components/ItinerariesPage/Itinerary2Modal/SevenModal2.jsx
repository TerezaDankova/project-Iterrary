import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SevenModal2 = (props) => {

   const handleSeven2Close = () => props.setSeven2Show(false);

   return (
      <>
       <Modal size='xl' show={props.seven2Show} onHide={handleSeven2Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SEVEN</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>AFTERNOON IN FLORENCE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Florence is packed with world class art museums, shopping, and numerous domes and towers to climb for breathtaking views of the city. On this 10 day Italy itinerary, you have this afternoon and tomorrow to visit Florence. Like Rome, it will be a bit of a whirlwind.
            If you have an extra day or two to add to this itinerary, Florence would be a great place to add it. Doing so gives you the time to either slow down and savor Florence, or spend more time day tripping to the hill towns in Tuscany.
           <Image className='mt-3' src={'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
          
           <div className='mt-4' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VISIT THE DUOMO AND CLIMB THE DOME</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
        
           The Duomo, also called Cattedrale di Santa Maria del Fiore, is the centerpiece of Florence. The entire cathedral complex has multiple parts to it: the nave, Brunelleschi's Dome, Giotto's Bell Tower, and the Baptistery. It's a great place to start your tour of Florence.
           Climbing the 463 steps to the top of dome is one of Florence's best experiences. Along the way you will have marvelous views of the interior of the Duomo. These paintings are the “Last Judgement” frescoes showing heaven and hell. They are very graphic and Tyler and Kara were mesmerized by these, in particular the creepy portrayal of hell.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> Monday through Friday 8:15 am to 7:45 pm; Saturday 8:15 am to 5:30 pm; Sunday 12:45 pm to 5:30 pm</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €20</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.duomoflorence.it </div>
           </div>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VISIT THE BAPTISTERY</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           The Baptistery is one of the oldest buildings in Florence. It stands in Piazza del Duomo across from the Duomo. The giant bronze doors with relief sculptures are the main attraction but go inside to see the beautiful mosaics on the inside of the cupola.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span>Weekdays: 8:15 am - 10:15 am, 11:15 am - 6:30 pm; Saturday 8:15 am - 6:30 pm; Sunday 8:15 am - 1:30 pm</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €5</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.baptisteryflorence.it </div>
           </div>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ENJOY THE VIEW FROM GIOTTO'S BELL TOWER</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Giotto's Bell Tower, also called the Campanile, is the tall tower attached to the Duomo. For an awesome view of Florence, and a chance to look down on the dome, climb the 414 steps to the top.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span>8:15 am - 7:30 pm</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €15</div>
           </div>
           <Row className=''> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/8140617/pexels-photo-8140617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/10385997/pexels-photo-10385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/3329203/pexels-photo-3329203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/4916697/pexels-photo-4916697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>PONTE VECCHIO & PIAZZALE MICHELANGELO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           In the late afternoon, stroll across Ponte Vecchio. This medieval stone bridge spans the Arno River. For centuries, shops have lined the sides of the bridge.
           The name was given to what was the oldest Florentine bridge when the bridge to the Carraia was built, then called "Ponte Nuovo" in contrast to the pons Vetus. 
           Beyond the historical value, the bridge over time has played a central role in the city road system, starting from when it connected the Roman Florentia with the Via Cassia Nuova commissioned by the emperor Hadrian in 123 AD.
           In the evening, go to Piazzale Michelangelo, the best place to watch the sunset in Florence.
           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4186549/pexels-photo-4186549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
  
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SevenModal2