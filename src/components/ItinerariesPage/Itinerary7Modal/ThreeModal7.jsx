import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const ThreeModal7 = (props) => {

   const handleThree7Close = () => props.setThree7Show(false);

   return (
      <>
      <Modal size='xl' show={props.three7Show} onHide={handleThree7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY THREE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>SIRACUSA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            The city of Syracuse and the island of Ortigia are packed with charm and history. Ortigia Island (also known as Città Vecchia, the Old City) is the historic centre of the city and is connected to Syracuse by three bridges.
            We recommend spending at least three days in Syracuse, which will allow a day for exploring Ortigia, Syracuse and a day trip to the stunning old towns of Noto, Ragusa and Modica.
            Most of the main historical sights in Syracuse are located just north of the city. Our favourite place in Syracuse was the Neapolis Archaeological Park which is home to the most important archaeological sites in Syracuse including the large Roman and Greek Amphitheatres. The park is open each day from 9 am and takes around 2-3 hours to visit.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
            Make sure to visit the cave known as the Ear of Dionysius located in the park. This ancient water cistern is shaped like an ear which gives it excellent acoustics.
            A short walk from the Neapolis Archaeological Park is the Museo Archeologico Regionale Paolo Orsi. The museum holds a vast array of artefacts from locations throughout Sicily and is one of the most prominent archaeological museums in Europe.
            The impressive Basilica Santuario Madonna delle Lacrime (Our Lady of the Tears) church is just across the road from the archaeological museum and is worth a visit.
            One final place that’s worth a visit is the Catacombs of San Giovanni (the catacombs of St. John). Visitors can take a tour of the subterranean tombs that lie beneath the church.
          
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

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ORITIGA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            We recommend taking a day to explore the beautiful island of Ortigia in the centre of Syracuse. It’s a small island and easily explored on foot.
            There are lots of things to see in Ortigia, including the Arethusa Springs, the stunning Cathedral of Syracuse and the Temple of Apollo. We really enjoyed strolling around the narrow streets of Ortigia and just wandering around the town.
            For a really unique experience in Ortigia check out the Church of St. Filippo the Apostle. The church is a hidden gem in Ortigia. Here visitors can take a tour of the underground levels of the church (built by the Greeks) that are beneath the city. Tours run hourly throughout the day.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4186549/pexels-photo-4186549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
  
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default ThreeModal7