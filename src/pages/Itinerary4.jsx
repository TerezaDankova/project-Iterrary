import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map1 from '../pictures/map1.jpg'
import './css/Itinerary.css'

import OneModal4 from '../components/ItinerariesPage/Itinerary4Modal/OneModal4';
import TwoModal4 from '../components/ItinerariesPage/Itinerary4Modal/TwoModal4';
import ThreeModal4 from '../components/ItinerariesPage/Itinerary4Modal/ThreeModal4';
import FourModal4 from '../components/ItinerariesPage/Itinerary4Modal/FourModal4';
import FiveModal4 from '../components/ItinerariesPage/Itinerary4Modal/FiveModal4';
import SixModal4 from '../components/ItinerariesPage/Itinerary4Modal/SixModal4';
import SevenModal4 from '../components/ItinerariesPage/Itinerary4Modal/SevenModal4';


const Itinerary4 = (props) => {

  const [one4Show, setOne4Show] = useState(false);
  const handleOne4Show = () => setOne4Show(true);
  const [two4Show, setTwo4Show] = useState(false);
  const handleTwo4Show = () => setTwo4Show(true);
  const [three4Show, setThree4Show] = useState(false);
  const handleThree4Show = () => setThree4Show(true);
  const [four4Show, setFour4Show] = useState(false);
  const handleFour4Show = () => setFour4Show(true);
  const [five4Show, setFive4Show] = useState(false);
  const handleFive4Show = () => setFive4Show(true);
  const [six4Show, setSix4Show] = useState(false);
  const handleSix4Show = () => setSix4Show(true);
  const [seven4Show, setSeven4Show] = useState(false);
  const handleSeven4Show = () => setSeven4Show(true);


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">ROME - FLORENCE - CINQUE TERRE - MILAN - VENICE</h6>


      <OneModal4 one4Show={one4Show} setOne4Show={setOne4Show}/>
      <TwoModal4 two4Show={two4Show} setTwo4Show={setTwo4Show}/>
      <ThreeModal4 three4Show={three4Show} setThree4Show={setThree4Show}/>
      <FourModal4 four4Show={four4Show} setFour4Show={setFour4Show}/>
      <FiveModal4 five4Show={five4Show} setFive4Show={setFive4Show}/>
      <SixModal4 six4Show={six4Show} setSix4Show={setSix4Show}/>
      <SevenModal4 seven4Show={seven4Show} setSeven4Show={setSeven4Show}/>
   


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOne4Show} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwo4Show} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThree4Show} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFour4Show} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFive4Show} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSix4Show} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSeven4Show} >Day 7</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map1} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5'>
        <div><span className='mr-2 days' onClick={handleOne4Show}>Day 1:</span><span>Arrive in Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwo4Show}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThree4Show}>Day 3:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFour4Show}>Day 4:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFive4Show}>Day 5:</span><span>Tuscany day trip</span></div>
        <div><span className='mr-2 days' onClick={handleSix4Show}>Day 6:</span><span>Pisa</span></div>
        <div><span className='mr-2 days' onClick={handleSeven4Show}>Day 7:</span><span>Cinque Terre</span></div>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary4