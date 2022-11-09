import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const TwoModal7 = (props) => {

   const handleTwo7Close = () => props.setTwo7Show(false);

   return (
      <>
       <Modal size='xl' show={props.two7Show} onHide={handleTwo7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY TWO</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
   
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ETNA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Hike around the Etna Volcano:
            First, head off to Etna volcano, an active volcano with trails leading to the summit. If you’re wanting to take things easy, simply hike up to the Crateri Silvestri.
            These are smaller craters that you can easily reach from the road, and that you can hike around. There is a short trail that loops around the craters, allowing you to see both inside them and over the stunning view.
            If you want to go higher and take full advantage of the views, you can catch a cable car or trek up on one of the numerous hiking trails.
            Personally I wouldn’t recommend hiking all the way since the view can be quite monotonous.
            There are also guided tours that you can join if you prefer. The landscape is otherworldly, it feels like walking on the moon. Coupled with this lunar landscape is the sea in the distance, making for a fascinating view.

           <Image className='mt-3' src={'https://images.pexels.com/photos/9849879/pexels-photo-9849879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>TAORMINA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           <div className=' pr-3'>
            Taormina is located on the northeastern corner of Sicily in the shadow of Mount Etna and is one of our favorite places in Sicily. The beautiful hillside town is perched almost 500 meters above the sea and is a Meditteranean paradise with quaint old streets, incredible food, and beautiful views.
            Things to do in Taormina:
            Stroll along the Corso Umberto (the ancient main street) and take in the views from Piazza IX Aprile. Get lost down the winding back streets and check out the public gardens, a quiet oasis away from the crowds. The food in Taormina is also amazing and a stop at Bam Bar, famous for its granitas, is essential!
            The highlight of Taormina is the ancient Greek theatre that sits in the old town. This 4th-century theatre has one of the most impressive backdrops we’ve ever seen with Mount Etna towering in the distance. To avoid the crowds we recommend visiting the theatre early in the morning.
            If you fancy a day on the beach, make your way down the hill to Isola Bella, a small island located below Taormina. Known as the Pearl of the Ionian Sea, visitors can walk the stony beach out to the island and it’s a great place for a swim.
            If you’re feeling active there is a beautiful hike from the old town up to the Della Madonna Church above Taormina. The views from up here are incredible and it is a great place to view Mount Etna from.
            Taormina is a great base for exploring the area and a day trip to Mount Etna is a must. We drove from Taormina to the Rifugio Sapienza, a tourist area on the slopes on Mount Etna from where the cable cars depart.

           </div>
           <Image className='mt-3' src={'https://images.pexels.com/photos/937690/pexels-photo-937690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default TwoModal7