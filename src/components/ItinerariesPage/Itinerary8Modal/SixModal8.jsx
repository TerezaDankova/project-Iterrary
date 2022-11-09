import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const SixModal8 = (props) => {

   const handleSix8Close = () => props.setSix8Show(false);

   return (
      <>
       <Modal size='xl' show={props.six8Show} onHide={handleSix8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY SIX</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
  
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>LACONI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
              Sadly, after spending some nice time in Alghero, you will have to drive back towards Cagliari. Despite the road being longer, it’s actually faster if you go back to Sassari and follow State Road SS 131. Choosing the shorter road will surely grant you some mountain views, but the reduced number of kilometers makes for a larger amount of driving time since you’d be going through the island’s hinterland.

               <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
     
              You can definitely head directly to Cagliari, but I recommend making a stop midway, in Laconi, for the night. There are actually quite a few sites to visit along the way too. Fordongianus, with its Roman thermal bats (they still work and are a SPA location!) is a great option, or you can choose to see another excellently preserved Nuraghe, the Santu Antine one. If you leave nice and early, you can be in Laconi by lunch time and have the entire afternoon to explore.
              Don’t miss Aymerich Park, a botanical garden designed by one of the local noblemen some centuries ago and filled with all kinds of plants, and the castle – owned by the same Aymerich family, it’s now in ruins but there’s still something interesting left to see.
              There is also an interesting walking route to follow in the village, based on the patron Saint, Sant’Ignazio. You can visit its house, the church where he went to pray to every day, and the museum that was curated in his honor. Moreover, you can join some wine and truffle tasting tours. There really is something for anybody, despite the village being so small!
              If you happen to have time to spare, you can also hike to Sa Stiddiosa waterfall the day after – it’s beautiful! If your flight schedule is too tight, the only thing left to do is drive back to Cagliari, putting an end to this complete Sardinia itinerary.

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default SixModal8