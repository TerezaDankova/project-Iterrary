import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal4 = (props) => {

   const handleTwo4Close = () => props.setTwo4Show(false);

   return (
      <>
       <Modal size='xl' show={props.two4Show} onHide={handleTwo4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           On this busy day, you will visit two of Rome's most popular sights, the Colosseum and the Vatican. These can be visited in either order. My recommendation is to start at the Colosseum and end at Vatican City, so you can end the day with spectacular views over Rome from the dome of St. Peter's Basilica.
           With that being said, the best way to visit the Vatican Museum crowd free is to take an early morning tour, before it “officially” opens. These tours start around 7 am and are pricey. If you arrived yesterday on a red eye flight from the USA, it can be TOUGH to get up early enough to do this 
           (the time change alone could make it feel like you are setting your alarm for some time around 1 am). But it is worth considering if visiting the Vatican without the crowds is important to you.

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>THE COLOSSEUM</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Dating back to 80 AD, this is the largest amphitheater that was ever built at the time. It could hold up to 80,000 people, spectators who were drawn here to watch gladiatorial contests, executions, animal hunts, and re-enactments of famous battles. It is also one of the seven New Wonders of the World.
            In 2019, this was the most popular tourist attraction in the world, with 7.6 million visitors.
            Expect BIG crowds at the Colosseum. For the best experience, book your tickets in advance or join a skip-the-line tour, in order to avoid spending your valuable time in line.
           <br/>
            HOW TO HAVE THE BEST EXPERIENCE AT THE COLOSSEUM:
            Lines tend to be long to get into the Colosseum, even first thing in the morning.
           <Image className='mt-3' src={'https://images.pexels.com/photos/9849879/pexels-photo-9849879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
           <div className='mt-4'> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span>from 9 am till 7 pm/ Closed Mondays</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €16 (+ €2 online reservation fee) for the combo-ticket that gets you in to the Roman Forum, Palatine Hill, and the Colosseum; there is also a Full Experience ticket that also includes a visit to the Colosseum arena and underground area for €22</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.colosseum.it </div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Getting Here:</span> The closest metro stop is Colosseo. When you exit the metro station, the Colosseum will be right in front of you.</div>
           </div>
           <div className='mt-2'>If lines are long and you do not have advance tickets or you do not want to join a skip-the-line tour, you have two options that might cut down on your waiting time: go first to the Roman Forum (you can get a combo-ticket to later skip the Colosseum ticket lines), or get in line at the Colosseum for the audio-guide. 
            If you purchase the audio-guide, I read that you get to bypass the main ticket lines. If even you don't plan on using the audio guide, it might be worth paying for it if lines are very long.</div>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>THE ROMAN FORUM AND PALATINE HILL</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className='mt-2 pr-3'>
            The Roman Forum is the historical center of Rome. This is ancient Rome, a complex of government buildings, temples, and marketplaces from 2000 years ago.
            Palatine Hill is one of the seven hills of Rome. It sits next to the Roman Forum. There are several archaeological sites here and you get a nice view over the Roman Forum.
            There are several entrances into the Roman Forum. The Palatine Hill entrance on Via di San Gregorio usually has the shortest line. Enter here, and later, exit at the gate nearest the Colosseum.
           </div>
            <Image className='mt-3' src={'https://images.pexels.com/photos/7220121/pexels-photo-7220121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VATICAN CITY</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className=' pr-3'>
           Vatican City is the smallest country in the world. There are three big sights to visit here: the Vatican Museums, the Sistine Chapel, and St. Peter's Basilica.
           The lines to enter the Vatican Museums and the Sistine Chapel are enormous…up to 3 hour waits on the busiest days. Mid-mornings tend to be the busiest time to tour the Vatican. In the afternoon, crowds tend to lessen, at least a little bit. 
           To avoid the worst of the crowds, the best times to visit Vatican City are first thing in the morning and just before closing time.
           </div>
           <Image className='mt-3' src={'https://images.pexels.com/photos/937690/pexels-photo-937690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>VISITING THE VATICAN MUSEUMS AND SISTINE CHAPEL</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Reserve your tickets for early afternoon (1 pm or 2 pm). Start at the Vatican Museums and then visit Sistine Chapel.
           <div className=''> 
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Hours:</span> Monday through Saturday 9 am - 6 pm; last entry at 4 pmClosed Sundays, except the last Sunday of the month (9 am - 2 pm, free)</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Cost:</span> €17, €4 online reservation fee</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Website:</span> www.biglietteriamusei.vatican.va </div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Getting Here:</span> To get here, take the metro, line A, to the Ottaviano or Cipro stations.</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Dress Code:</span> Men: no shorts. Women: no bare shoulders and no shorts or skirt shorter than knee length.</div>
           </div>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ST. PETER'S BASILICA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className='pr-3'>
            St. Peter's Basilica is the largest church in the world. It is also considered to be the most renowned work of Renaissance architecture.
            St. Peter's Basilica is a separate visit from the Vatican Museums and the Sistine Chapel. Like the Vatican Museums, lines can be long to enter the Basilica, although they tend to be shorter.
            To skip the line to enter St. Peter's Basilica, consider taking a tour. This guided tour also includes the dome climb. And this tour includes the dome, a visit to St. Peter's tomb, and a visit to the underground grottoes.
            To get here from the Vatican Museums, you will have to exit the Vatican Museums and walk 20 minutes to St. Peter's Basilica. There is a short-cut from the Sistine Chapel to St. Peter's Basilica, but this is reserved for tour groups (another great reason to join a tour!).
            It is free to enter St. Peter's Basilica. However, to climb to the top of the Dome, there is a fee:
            Climb 551 steps to the top of the dome: €8
            Take the elevator to the terrace, climb 320 steps to the top: €10
            Is it worth it? Absolutely. Here is the view from the dome of St. Peter's Basilica.
           </div>
           <div className='mb-3'> 
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Hours of the Basilica:</span> April to September 7 am - 7 pm; October to March 7 am - 6:30 pm</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Hours of the Dome:</span> April to September 7:30 am - 6:30 pm; October through March 7:30 am - 5 pm</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Cost:</span> Free; €8 - €10 to climb the dome.</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Website:</span> www.biglietteriamusei.vatican.va </div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Getting Here:</span> To get here, take the metro, line A, to the Ottaviano or Cipro stations.</div>
              <div><span className='mr-2' style={{fontWeight: 'bold'}}>Dress Code:</span> Men: no shorts. Women: no bare shoulders and no shorts or skirt shorter than knee length.</div>
           </div>
           <Row className='my-3'> 
              <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/9869786/pexels-photo-9869786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={6}>
               <Image className='mt-3' src={'https://images.pexels.com/photos/4558417/pexels-photo-4558417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
               <Col sm={12}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/7464775/pexels-photo-7464775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
               </Col>
            </Row>

        


           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal4