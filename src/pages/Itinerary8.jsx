import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map8 from '../pictures/map8.jpg'
import './css/Itinerary.css'

import OneModal8 from '../components/ItinerariesPage/Itinerary8Modal/OneModal8';
import TwoModal8 from '../components/ItinerariesPage/Itinerary8Modal/TwoModal8';
import ThreeModal8 from '../components/ItinerariesPage/Itinerary8Modal/ThreeModal8';
import FourModal8 from '../components/ItinerariesPage/Itinerary8Modal/FourModal8';
import FiveModal8 from '../components/ItinerariesPage/Itinerary8Modal/FiveModal8';
import SixModal8 from '../components/ItinerariesPage/Itinerary8Modal/SixModal8';
import SevenModal8 from '../components/ItinerariesPage/Itinerary8Modal/SevenModal8';


const Itinerary8 = (props) => {

  const [one8Show, setOne8Show] = useState(false);
  const handleOne8Show = () => setOne8Show(true);
  const [two8Show, setTwo8Show] = useState(false);
  const handleTwo8Show = () => setTwo8Show(true);
  const [three8Show, setThree8Show] = useState(false);
  const handleThree8Show = () => setThree8Show(true);
  const [four8Show, setFour8Show] = useState(false);
  const handleFour8Show = () => setFour8Show(true);
  const [five8Show, setFive8Show] = useState(false);
  const handleFive8Show = () => setFive8Show(true);
  const [six8Show, setSix8Show] = useState(false);
  const handleSix8Show = () => setSix8Show(true);
  const [seven8Show, setSeven8Show] = useState(false);
  const handleSeven8Show = () => setSeven8Show(true);


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCityOrange">CAGLIARI - OLBIA - ALGHERO</h6>


      <OneModal8 one8Show={one8Show} setOne8Show={setOne8Show}/>
      <TwoModal8 two8Show={two8Show} setTwo8Show={setTwo8Show}/>
      <ThreeModal8 three8Show={three8Show} setThree8Show={setThree8Show}/>
      <FourModal8 four8Show={four8Show} setFour8Show={setFour8Show}/>
      <FiveModal8 five8Show={five8Show} setFive8Show={setFive8Show}/>
      <SixModal8 six8Show={six8Show} setSix8Show={setSix8Show}/>
      <SevenModal8 seven8Show={seven8Show} setSeven8Show={setSeven8Show}/>
   


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnOrange" onClick={handleOne8Show} >Day 1</span>
      <span className="mr-3 btnOrange" onClick={handleTwo8Show} >Day 2</span>
      <span className="mr-3 btnOrange" onClick={handleThree8Show} >Day 3</span>
      <span className="mr-3 btnOrange" onClick={handleFour8Show} >Day 4</span>
      <span className="mr-3 btnOrange" onClick={handleFive8Show} >Day 5</span>
      <span className="mr-3 btnOrange" onClick={handleSix8Show} >Day 6</span>
      <span className="mr-3 btnOrange" onClick={handleSeven8Show} >Day 7</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map8} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5'>
        <div><span className='mr-2 days' onClick={handleOne8Show}>Day 1:</span><span>Cagliari</span></div>
        <div><span className='mr-2 days' onClick={handleTwo8Show}>Day 2:</span><span>Cagliari</span></div>
        <div><span className='mr-2 days' onClick={handleThree8Show}>Day 3:</span><span>Oligastra</span></div>
        <div><span className='mr-2 days' onClick={handleFour8Show}>Day 4:</span><span>Oligastra</span></div>
        <div><span className='mr-2 days' onClick={handleFive8Show}>Day 5:</span><span>Alghero</span></div>
        <div><span className='mr-2 days' onClick={handleSix8Show}>Day 6:</span><span>Alghero</span></div>
        <div><span className='mr-2 days' onClick={handleSeven8Show}>Day 7:</span><span>Alghero</span></div>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary8