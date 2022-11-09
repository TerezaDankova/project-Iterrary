import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal7 = (props) => {

   const handleFive7Close = () => props.setFive7Show(false);

   return (
      <>
       <Modal size='xl' show={props.five7Show} onHide={handleFive7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>MODICA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
          After all the outdoors adventures of the previous days, it’s time for a bit of culture and history. In day 5, you’ll be doing more exploring of historic Italian towns and villages.
          With a history like Italy’s, it’s easy to see the influence of time and cultures on the architecture. So, once again, strap on your walking shoes and a shady hat, because you’re going exploring.
          Modica lies 40 minutes from Noto by car, so it’s the first stop on today’s itinerary.
          Modica is a sandstone coloured city, with a number of monuments breaking the view. One such baroque architectural wonder is the Cathedral of St George.
          If you get a chance to hear the organ play while the light streams in through the dome, it’s quite spectacular. The view from the belltower is another similarly wonderful experience. You’ll get sweeping views over the little town.
          If you’ve wanted to try Italian fine dining, now’s your chance. Locanda Don Serafino is a Michelin starred restaurant that is located within a cave. So, while the food and wine is absolutely excellent, the location really makes it special.
          Of course, after a beautiful meal, there must be dessert. Modica is famous for its dark chocolate. If you want the full experience, visit the chocolate museum. Otherwise, just grab a slab or ten for the road.
          
          <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>SCICLI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
          Once you’ve eaten, take a 15-minute drive to Scicli. This is another beautiful town with Baroque churches, cobblestone streets and cute houses. It’s a very scenic place to walk around and explore during your afternoon.
          Scicli has the classic relaxed Italian vibe and lifestyle, and you’ll likely see well-dressed men with hats and cigars outside little pubs and good restaurants.
          The feel of the town is comfortable and authentic, which makes it very charming to explore by foot.
         
           <Row>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7605106/pexels-photo-7605106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7717808/pexels-photo-7717808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>RAGUSA IBLA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            After Modica and Scicli, drive up to Ragusa. It’s only a 30-minute drive, and you should be there by the late afternoon in order to do a little more wandering. Because Ragusa is a hilltop city, the panoramic views are insane.
            As you drive from one hill to the other you will get sweeping views over the town and surrounding countryside.
            It’s unlike anything else I’ve ever seen. Ragusa Ibla is the historical old town centre of Ragusa, built on the main hill of the city.
            Giardino Ibleo, a public park, is possibly the best viewpoint. But it’s hard to choose with so many contending for the title.
            Duomo di San Giorgio is also a beautiful place to visit. It’s a grand church with paintings and stained-glass windows, so try to go inside if you get a chance. If not, it’s still beautiful to admire against the setting sun.
            Simply wandering around the streets of Ragusa Ibla feels like stepping back in time.
           

         

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal7