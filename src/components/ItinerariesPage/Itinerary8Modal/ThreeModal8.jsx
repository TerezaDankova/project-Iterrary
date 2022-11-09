import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const ThreeModal8 = (props) => {

   const handleThree8Close = () => props.setThree8Show(false);

   return (
      <>
      <Modal size='xl' show={props.three8Show} onHide={handleThree8Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY THREE</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>

           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>OLIGASTRA</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Day 3 would start with another early alarm clock, but very worth it. Ogliastra is the best place for panoramic hikes: you should try the hike to either Cala Goloritzé or Cala Sisine. Climbing your way up and down the Ogliastra mountains will grant you some of the most breathtaking views of your life. The scenery is nothing but mesmerizing. Keep in mind Cala Goloritzé is protected so only a limited number of visitors are allowed each day. You will have to book your visit via an app.
           <Image className='mt-3' src={'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
         
           </Container>
        </Modal.Body>
        
         
       
      </Modal>
      </>
   )
}
export default ThreeModal8