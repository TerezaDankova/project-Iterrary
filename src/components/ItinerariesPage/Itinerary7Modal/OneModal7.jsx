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
           An ancient port city, Catania is Sicily’s second-largest city and the arrival point for many visitors. Catania is different to Palermo, but not in a bad way. While Palermo may have more markets, Catania is better for shopping and has an abundance of trattoria for food. Catania’s architecture is also more Boroque buildings and it’s worth spending a few nights in the historic city, a compelling mix of gritty and charming.
          
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>CATANIA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            We recommend allowing two days for Catania: one day to explore the city and a second to make some of the day trips from the city.
            <div>
               <br/>
            <span style={{fontWeight: 'bold', fontSize: '16px'}}>
            Things to do in Catania:
            </span>
            <br/>
            One day is enough time to see most of the main sights in Catania.
            Start your morning at the Catania Fish Market (Piscaria Mercato del Pesce). Located close to the Port and a short walk from Ursino Castle (Castello Ursino). The fish market is one of the best markets in Sicily and is packed with every kind of seafood imaginable.
            Make sure not to miss the Catania Archaeological Park in the centre of the old town. Catania was once a Greek settlement and the ruins of the Greek Theatre remain hidden away under the city. The park contains a Roman Amphiteare and baths along with the Greek-Roman Theatre on Via Vittorio Emanuele II.
            One of the best parts of the park is that visitors are free to walk around all of the ruins so it’s a very intimate experience compared to other archaeological sites in Italy.
            There are many great sites to explore in Catania. We recommend a visit to the stunning Bellini Gardens and the impressive Catania Cathedral. The medieval Ursino Castle is definitely worth an hour to explore and has an impressive museum inside.
            If you fancy some window shopping take a stroll up Via Etnae, a partially pedestrianised street that leads off Piazza Duomo. There is also a great view of Mount Etna in the distance looking north from Via Etnae.
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