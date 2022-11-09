import { Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal7 = (props) => {

   const handleFour7Close = () => props.setFour7Show(false);

   return (
      <>
       <Modal size='xl' show={props.four7Show} onHide={handleFour7Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>LAGHETTI DI CAVAGRANDE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            In the morning, take a hike in Cavagrande, a protected nature reserve. At the summit you will find a parking area and cafe which serves huge sandwiches. It’s a good spot to stock up on drinks and snacks before your hike.
            From here you can enjoy the views over Cavagrande, which are in itself pretty breathtaking, and decide whether you want to venture on a hike.
            The trail is officially closed, with a locked gate and sign next to it advising people not to go down to the lakes.

           <Image className='mt-3' src={'https://images.pexels.com/photos/3652853/pexels-photo-3652853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
          
            That said there are also boxes placed on both sides of the gate to make it easier to climb over it. In true Italian style, very few people turn away just because of a sign and closed gate.
            The hike starts at the top of the gorge, meaning you have epic views all throughout the hike. The trail is fairly well marked, although there are sections where it’s very rocky.
            We saw people hiking down in sandals, however I would highly discourage it. Make sure to wear trainers!
            Once you reach the bottom you will find beautiful emerald lakes that you can swim in, with little waterfalls pouring into them.
            The water is quite cool, but just what you need after the hike down. I loved swimming in these lakes, looking up at the steep sides of the gorges towering above us.

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>MARZAMENI</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
            Whether you have lunch at the lakes or the café at the summit, make sure to hit the road again fairly early. During the afternoon drive south towards Marzamemi.
            There are some beautiful beaches on the way in the Vendicari Oasis if you want to spend a little time relaxing after your hike.
            But be sure to leave some time to check out Marzamemi, a southern Italian hamlet which has a very cute old town.
            You can get gelato (or traditional Sicilian granita) and wander down the narrow streets for the perfect Italian village experience.

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>NOTO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           In the afternoon, drive to Noto, a stunning old town with lots of Baroque churches. The Noto Cathedral, a UNESCO World Heritage Site, is stunning and has a number of important religious artworks inside it.From the top of the bell tower of St. Charles Church, which the cathedral is part of, you’ll get an awesome view over the town. The steps are small and the staircase is narrow, so if you’re claustrophobic, it might be a bit tight.
           But if tight spaces aren’t an issue, it’s very much worth the climb. Particularly just before sunset, when you can watch golden hour wash over the city.

            <Image className='mt-3' src={'https://images.pexels.com/photos/11365684/pexels-photo-11365684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal7