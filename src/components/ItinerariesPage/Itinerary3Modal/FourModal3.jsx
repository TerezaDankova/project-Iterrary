import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal3 = (props) => {

   const handleFour3Close = () => props.setFour3Show(false);

   return (
      <>
       <Modal size='xl' show={props.four3Show} onHide={handleFour3Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>DOLOMITES</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            The site of the Dolomites comprises a mountain range in the northern Italian Alps, numbering 18 peaks which rise to above 3,000 metres and cover 141,903 ha. It features some of the most beautiful mountain landscapes anywhere, 
            with vertical walls, sheer cliffs and a high density of narrow, deep and long valleys. A serial property of nine areas that present a diversity of spectacular landscapes of international significance for geomorphology marked
            by steeples, pinnacles and rock walls, the site also contains glacial landforms and karst systems. It is characterized by dynamic processes with frequent landslides, floods and avalanches. The property also features one of 
            the best examples of the preservation of Mesozoic carbonate platform systems, with fossil records.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/3996362/pexels-photo-3996362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal3