import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FiveModal4 = (props) => {

   const handleFive4Close = () => props.setFive4Show(false);

   return (
      <>
       <Modal size='xl' show={props.five4Show} onHide={handleFive4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FIVE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>LAKE COMO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            If you love hiking, you have to pay Lake Como a visit.
            Many travellers visit this iconic location due to the fame of stars who have villas on the lakeshore. However, what they're missing out on are the epic views from the surrounding mountains.
            Lake Como is surrounded by hills and mountains, which give it incredible 360 views over the neighbouring countryside, all the way to the Swiss Alps.
            If you're up for a challenge you can hike up Monte San Primo, then head to Bellagio for a refreshing aperitivo.
            For those who don't want a challenging hike you can still enjoy the beauties of the lake, maybe going for a relaxing sail on the lake or a peaceful stroll along the lakeshore.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/7946868/pexels-photo-7946868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FiveModal4