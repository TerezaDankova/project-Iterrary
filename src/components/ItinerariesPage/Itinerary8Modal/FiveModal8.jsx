import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal8 = (props) => {

   const handleFive8Close = () => props.setFive8Show(false);

   return (
      <>
       <Modal size='xl' show={props.five8Show} onHide={handleFive8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ALGHERO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Dedicate a full three days to explore Alghero and its area, you won’t regret it. On the first day, while you are driving there, I recommend stopping in Castelsardo (a beautiful village, with a strong Genoese soul, built on a hill overlooking the sea) and visiting a nuraghe, one of the ruins left by the local prehistoric populations – Nuraghe Palmavera is perfect and easy to reach. Your first day is complete – but before going to sleep, be sure to have a walk on Alghero’s bastions for the sunset, and explore the city center!
            On day two (day 7 of this complete Sardinia itinerary), head to Anghelu Ruju Necropolis (make sure to buy the combined Palmavera + Anghelu Ruju Necropolis ticket), a stunning prehistoric burial site, and visit Cantine Sella e Mosca, a local winery that’s just at a stone’s throw from the necropolis. Be sure to book a wine tasting experience there: they will make you try some of the best wines in Sardinia.

           <Row>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7605106/pexels-photo-7605106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col sm={6}>
               <Image className='mt-4' src={'https://images.pexels.com/photos/7717808/pexels-photo-7717808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>
           In the afternoon, depending on the season, you can either opt for some relaxing time at the beach (Le Bombarde is the most famous one in the area) or visit Capo Caccia cliffs – stunning views! – and Neptune’s Caves – some of the most beautiful and complex caves in Sardinia. If you wish to visit the caves, make sure to book your visit in advance.
           On the third day, you can plan a day trip to Bosa, a pretty village on the Temo river, famous for its colorful houses, and visit one of the beaches in the area. My recommendation is Cani Malu, which is actually more of a swimming hole. In Bosa, try joining a mini-cruise on the river, it’s a fun experience!


         

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal8