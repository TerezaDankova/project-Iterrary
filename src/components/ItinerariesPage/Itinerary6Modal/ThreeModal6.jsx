import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const ThreeModal6 = (props) => {

   const handleThree6Close = () => props.setThree6Show(false);

   return (
      <>
      <Modal size='xl' show={props.three6Show} onHide={handleThree6Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY THREE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
           <div className='' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>NAPLES</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            I travelled many times to Naples when I was younger, first on school trip and other times to visit friends. It’s an incredibly beautiful part of Italy, where you can experience a very different vibe from the northern cities.
            Naples itself has many gorgeous sights to offer, but the main attractions in the area are without a doubt beyond the city.

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
          
           Naples' historic city centre is the largest in Europe and has been designated as a UNESCO World Heritage Site. A wide range of culturally and historically significant sites are nearby, including the Palace of Caserta and the 
           Roman ruins of Pompeii and Herculaneum. Naples is also known for its natural beauties, such as Posillipo, Phlegraean Fields, Nisida and Vesuvius.
           Neapolitan cuisine is noted for its association with pizza, which originated in the city, as well as numerous other local dishes. Restaurants in the Naples' area have earned the most stars from the Michelin Guide of any Italian province.
           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4186549/pexels-photo-4186549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
  
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default ThreeModal6