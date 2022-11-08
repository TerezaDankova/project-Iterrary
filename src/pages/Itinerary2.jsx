import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map2 from '../pictures/map2.jpg'
import './css/Itinerary.css'
import OneModal2 from '../components/ItinerariesPage/Itinerary2Modal/OneModal2';
import TwoModal2 from '../components/ItinerariesPage/Itinerary2Modal/TwoModal2';
import ThreeModal2 from '../components/ItinerariesPage/Itinerary2Modal/ThreeModal2';
import FourModal2 from '../components/ItinerariesPage/Itinerary2Modal/FourModal2';
import FiveModal2 from '../components/ItinerariesPage/Itinerary2Modal/FiveModal2';
import SixModal2 from '../components/ItinerariesPage/Itinerary2Modal/SixModal2';
import SevenModal2 from '../components/ItinerariesPage/Itinerary2Modal/SevenModal2';
import EightModal2 from '../components/ItinerariesPage/Itinerary2Modal/EightModal2';
import NineModal2 from '../components/ItinerariesPage/Itinerary2Modal/NineModal2';
import TenModal2 from '../components/ItinerariesPage/Itinerary2Modal/TenModal2';


const Itinerary2 = (props) => {

  const [one2Show, setOne2Show] = useState(false);
  const handleOne2Show = () => setOne2Show(true);
  const [two2Show, setTwo2Show] = useState(false);
  const handleTwo2Show = () => setTwo2Show(true);
  const [three2Show, setThree2Show] = useState(false);
  const handleThree2Show = () => setThree2Show(true);
  const [four2Show, setFour2Show] = useState(false);
  const handleFour2Show = () => setFour2Show(true);
  const [five2Show, setFive2Show] = useState(false);
  const handleFive2Show = () => setFive2Show(true);
  const [six2Show, setSix2Show] = useState(false);
  const handleSix2Show = () => setSix2Show(true);
  const [seven2Show, setSeven2Show] = useState(false);
  const handleSeven2Show = () => setSeven2Show(true);
  const [eight2Show, setEight2Show] = useState(false);
  const handleEight2Show = () => setEight2Show(true);
  const [nine2Show, setNine2Show] = useState(false);
  const handleNine2Show = () => setNine2Show(true);
  const [ten2Show, setTen2Show] = useState(false);
  const handleTen2Show = () => setTen2Show(true);

  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCityOrange">ROME - FLORENCE - AMALFI COAST</h6>


      <OneModal2 one2Show={one2Show} setOne2Show={setOne2Show}/>
      <TwoModal2 two2Show={two2Show} setTwo2Show={setTwo2Show}/>
      <ThreeModal2 three2Show={three2Show} setThree2Show={setThree2Show}/>
      <FourModal2 four2Show={four2Show} setFour2Show={setFour2Show}/>
      <FiveModal2 five2Show={five2Show} setFive2Show={setFive2Show}/>
      <SixModal2 six2Show={six2Show} setSix2Show={setSix2Show}/>
      <SevenModal2 seven2Show={seven2Show} setSeven2Show={setSeven2Show}/>
      <EightModal2 eight2Show={eight2Show} setEight2Show={setEight2Show}/>
      <NineModal2 nine2Show={nine2Show} setNine2Show={setNine2Show}/>
      <TenModal2 ten2Show={ten2Show} setTen2Show={setTen2Show}/>


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnOrange" onClick={handleOne2Show} >Day 1</span>
      <span className="mr-3 btnOrange" onClick={handleTwo2Show} >Day 2</span>
      <span className="mr-3 btnOrange" onClick={handleThree2Show} >Day 3</span>
      <span className="mr-3 btnOrange" onClick={handleFour2Show} >Day 4</span>
      <span className="mr-3 btnOrange" onClick={handleFive2Show} >Day 5</span>
      <span className="mr-3 btnOrange" onClick={handleSix2Show} >Day 6</span>
      <span className="mr-3 btnOrange" onClick={handleSeven2Show} >Day 7</span>
      <span className="mr-3 btnOrange" onClick={handleEight2Show} >Day 8</span>
      <span className="mr-3 btnOrange" onClick={handleNine2Show} >Day 9</span>
      <span className="mr-3 btnOrange" onClick={handleTen2Show} >Day 10</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map2} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5'>
        <div><span className='mr-2 days' onClick={handleOne2Show}>Day 1:</span><span>Arrive in Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwo2Show}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThree2Show}>Day 3:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleFour2Show}>Day 4:</span><span>Sorrento an Pompeii</span></div>
        <div><span className='mr-2 days' onClick={handleFive2Show}>Day 5:</span><span>Capri</span></div>
        <div><span className='mr-2 days' onClick={handleSix2Show}>Day 6:</span><span>Amalfi Coast</span></div>
        <div><span className='mr-2 days' onClick={handleSeven2Show}>Day 7:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleEight2Show}>Day 8:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleNine2Show}>Day 9:</span><span>Tuscany</span></div>
        <div><span className='mr-2 days' onClick={handleTen2Show}>Day 10:</span><span>Fly home</span></div>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary2