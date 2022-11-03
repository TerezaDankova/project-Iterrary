import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const OneModal7 = (props) => {

   const handleOne7Close = () => props.setOne7Show(false);

   return (
      <>
      <Modal size='xl' show={props.one7Show} onHide={handleOne7Close}>
        <Modal.Header closeButton>
          <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY ONE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           Ideally,  plan to arrive in Rome early in the morning, or even the night before, to make the most of this day. If you arrive in the morning on a red eye flight, this first day can be challenging. Drop your luggage off at your hotel and spend the afternoon sightseeing in Rome. 
           I do not recommend making big plans today (no Vatican or Colosseum visits) because you might be exhausted.
          
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>BORGHESE GALLERY</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           The Borghese contains one of the best collections of art in the world. Art by Bernini, Raphael, Caravaggio, and Titian are all on display. This is a must-see for art aficionados. If you arrive into Rome in the morning, you have enough time to visit the Borghese midday, before the afternoon stroll through the city center.
           After your visit to the Borghese, stroll through the gardens that surround the museum. They are beautiful!
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> from 9 am till 7 pm/ Closed Mondays</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €13, +€2 reservation fee, prices can increase during special exhibits</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.galleriaborghese.it </div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Getting Here:</span> The closest metro station is Barberini on the A line (1.4 km, 17 minutes walking time). You can also get here by bus, taxi, and Uber. </div>
           </div>
           <Image className='mt-3' src={'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>EXPLORE THE HEART OF ROME</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className='mt-2 pr-3'>
           Spend the afternoon walking through the heart of Rome. This short, easy walk is a great introduction to Rome. On this walk, you will see some of Rome's most famous sites, such as the Spanish Steps, the Trevi Fountain, the Pantheon, and Piazza Navona.
           This walk is 2 miles long and takes about two hours. You will start at the Spanish Steps and end at Campo de Fiori. Below is a map of the walking route.
           If you prefer to walk the streets of Rome with a guide, this afternoon walking tour includes the Spanish Steps, the Trevi Fountain, the Pantheon, and Piazza Navona. And this is another highly rated walking tour of the historic center of Rome that includes gelato or coffee.
           The walking route starts at the Spanish Steps. If you visited the Borghese Gallery, it is a short walk to get here. From the Spanish Steps, you will walk to the Trevi Fountain, the Pantheon, stroll through lovely Piazza Navona, and end in Campo de Fiori. 
           For dinner, you can eat at one of the restaurants in Piazza Navona or Campo de Fiori. Or, if you are still doing great on time and energy, consider crossing the Tiber River to Trastevere, a neighborhood that is filled with great restaurants. We had a wonderful dinner at Carlo Menta.
           </div>
            <Row className='my-3'> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/6765836/pexels-photo-6765836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/791060/pexels-photo-791060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default OneModal7