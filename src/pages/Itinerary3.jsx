import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map1 from '../pictures/map1.jpg'
import './css/Itinerary.css'
import OneModal3 from '../components/ItinerariesPage/Itinerary3Modal/OneModal3';
import TwoModal3 from '../components/ItinerariesPage/Itinerary3Modal/TwoModal3';
import ThreeModal3 from '../components/ItinerariesPage/Itinerary3Modal/ThreeModal3';
import FourModal3 from '../components/ItinerariesPage/Itinerary3Modal/FourModal3';
import FiveModal3 from '../components/ItinerariesPage/Itinerary3Modal/FiveModal3';
import SixModal3 from '../components/ItinerariesPage/Itinerary3Modal/SixModal3';
import SevenModal3 from '../components/ItinerariesPage/Itinerary3Modal/SevenModal3';
import EightModal3 from '../components/ItinerariesPage/Itinerary3Modal/EightModal3';
import NineModal3 from '../components/ItinerariesPage/Itinerary3Modal/NineModal3';
import TenModal3 from '../components/ItinerariesPage/Itinerary3Modal/TenModal3';


const Itinerary3 = (props) => {

  const [one3Show, setOne3Show] = useState(false);
  const handleOne3Show = () => setOne3Show(true);
  const [two3Show, setTwo3Show] = useState(false);
  const handleTwo3Show = () => setTwo3Show(true);
  const [three3Show, setThree3Show] = useState(false);
  const handleThree3Show = () => setThree3Show(true);
  const [four3Show, setFour3Show] = useState(false);
  const handleFour3Show = () => setFour3Show(true);
  const [five3Show, setFive3Show] = useState(false);
  const handleFive3Show = () => setFive3Show(true);
  const [six3Show, setSix3Show] = useState(false);
  const handleSix3Show = () => setSix3Show(true);
  const [seven3Show, setSeven3Show] = useState(false);
  const handleSeven3Show = () => setSeven3Show(true);
  const [eight3Show, setEight3Show] = useState(false);
  const handleEight3Show = () => setEight3Show(true);
  const [nine3Show, setNine3Show] = useState(false);
  const handleNine3Show = () => setNine3Show(true);
  const [ten3Show, setTen3Show] = useState(false);
  const handleTen3Show = () => setTen3Show(true);

  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">ROME - FLORENCE - CINQUE TERRE - MILAN - VENICE</h6>


      <OneModal3 one3Show={one3Show} setOne3Show={setOne3Show}/>
      <TwoModal3 two3Show={two3Show} setTwo3Show={setTwo3Show}/>
      <ThreeModal3 three3Show={three3Show} setThree3Show={setThree3Show}/>
      <FourModal3 four3Show={four3Show} setFour3Show={setFour3Show}/>
      <FiveModal3 five3Show={five3Show} setFive3Show={setFive3Show}/>
      <SixModal3 six3Show={six3Show} setSix3Show={setSix3Show}/>
      <SevenModal3 seven3Show={seven3Show} setSeven3Show={setSeven3Show}/>
      <EightModal3 eight3Show={eight3Show} setEight3Show={setEight3Show}/>
      <NineModal3 nine3Show={nine3Show} setNine3Show={setNine3Show}/>
      <TenModal3 ten3Show={ten3Show} setTen3Show={setTen3Show}/>


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOne3Show} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwo3Show} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThree3Show} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFour3Show} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFive3Show} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSix3Show} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSeven3Show} >Day 7</span>
      <span className="mr-3 btnGreen" onClick={handleEight3Show} >Day 8</span>
      <span className="mr-3 btnGreen" onClick={handleNine3Show} >Day 9</span>
      <span className="mr-3 btnGreen" onClick={handleTen3Show} >Day 10</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map1} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5'>
        <div><span className='mr-2 days' onClick={handleOne3Show}>Day 1:</span><span>Arrive in Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwo3Show}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThree3Show}>Day 3:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFour3Show}>Day 4:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFive3Show}>Day 5:</span><span>Tuscany day trip</span></div>
        <div><span className='mr-2 days' onClick={handleSix3Show}>Day 6:</span><span>Pisa</span></div>
        <div><span className='mr-2 days' onClick={handleSeven3Show}>Day 7:</span><span>Cinque Terre</span></div>
        <div><span className='mr-2 days' onClick={handleEight3Show}>Day 8:</span><span>Milan</span></div>
        <div><span className='mr-2 days' onClick={handleNine3Show}>Day 9:</span><span>Venice</span></div>
        <div><span className='mr-2 days' onClick={handleTen3Show}>Day 10:</span><span>Fly home</span></div>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary3