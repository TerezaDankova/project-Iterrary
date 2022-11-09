import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal7 = (props) => {

   const handleSix7Close = () => props.setSix7Show(false);

   return (
      <>
       <Modal size='xl' show={props.six7Show} onHide={handleSix7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
  
           As you leave Ragusa Ibla, the panoramic scenery will give you some more epic views over the town and surrounding hills.
           You might be feeling a little down at this point, with the end of your vacation in sight, but you’re sure to have lots of fun on this day of exploring.

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>RAGUSA IBLA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Conscious there’s been a lot of adventure and history in this Sicily itinerary, but not much relaxing! If you want a bit of beach time, head to Ragusa Marina for a little sea and sand.
           It’s a classic white sandy beach, with a few palm trees lining the coast to break the horizon. It’s not a particularly exciting beach, but the water is clear, warm and calm. Perfect to wake you up for a full day ahead.
 
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CALTAGIRONE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Stop in Caltagirone on your drive back to Catania to break up the drive. It’s an hour and a half drive from Ragusa to Catania, so if you loved your first stop, you can keep going. But Caltagirone makes for a lovely break in the drive.
            Caltagirone’s main claim to fame is the Staircase of Santa María del Monte.
            The long, world-renowned staircase is tiled with the ceramics that Caltagirone is also known for. And it leads to an incredible view if you can make it to the top.
            If you want a few pretty things to remember your trip by, the ceramics here make for wonderful souvenirs.
           
            <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CATANIA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            By the end of the day, it’s best to get back to Catania, so that you’re close to the airport and relatively ready to go. There’s also lots to still see and do in Catania, so you won’t be bored.
            There are great restaurants for dinner as well, so get in a last bite of Italian food before you go home. After all, you might not make as many trips to Sicily as you’d like.
           
            <Row>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846210/pexels-photo-4846210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4846522/pexels-photo-4846522.jpeg?auto=compress&cs=tinysrgb&w=1600'} fluid/>
             </Col>
           </Row>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal7