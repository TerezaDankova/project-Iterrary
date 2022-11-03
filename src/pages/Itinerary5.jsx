import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map1 from '../pictures/map1.jpg'
import './css/Itinerary.css'


import OneModal5 from '../components/ItinerariesPage/Itinerary5Modal/OneModal5';
import TwoModal5 from '../components/ItinerariesPage/Itinerary5Modal/TwoModal5';
import ThreeModal5 from '../components/ItinerariesPage/Itinerary5Modal/ThreeModal5';
import FourModal5 from '../components/ItinerariesPage/Itinerary5Modal/FourModal5';
import SixModal5 from '../components/ItinerariesPage/Itinerary5Modal/SixModal5';
import SevenModal5 from '../components/ItinerariesPage/Itinerary5Modal/SevenModal5';
import FiveModal5 from '../components/ItinerariesPage/Itinerary5Modal/FiveModal5';


const Itinerary5 = (props) => {

  const [one5Show, setOne5Show] = useState(false);
  const handleOne5Show = () => setOne5Show(true);
  const [two5Show, setTwo5Show] = useState(false);
  const handleTwo5Show = () => setTwo5Show(true);
  const [three5Show, setThree5Show] = useState(false);
  const handleThree5Show = () => setThree5Show(true);
  const [four5Show, setFour5Show] = useState(false);
  const handleFour5Show = () => setFour5Show(true);
  const [five5Show, setFive5Show] = useState(false);
  const handleFive5Show = () => setFive5Show(true);
  const [six5Show, setSix5Show] = useState(false);
  const handleSix5Show = () => setSix5Show(true);
  const [seven5Show, setSeven5Show] = useState(false);
  const handleSeven5Show = () => setSeven5Show(true);


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">ROME - FLORENCE - CINQUE TERRE - MILAN - VENICE</h6>


      <OneModal5 one5Show={one5Show} setOne5Show={setOne5Show}/>
      <TwoModal5 two5Show={two5Show} setTwo5Show={setTwo5Show}/>
      <ThreeModal5 three5Show={three5Show} setThree5Show={setThree5Show}/>
      <FourModal5 four5Show={four5Show} setFour5Show={setFour5Show}/>
      <FiveModal5 five5Show={five5Show} setFive5Show={setFive5Show}/>
      <SixModal5 six5Show={six5Show} setSix5Show={setSix5Show}/>
      <SevenModal5 seven5Show={seven5Show} setSeven5Show={setSeven5Show}/>
   


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOne5Show} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwo5Show} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThree5Show} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFour5Show} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFive5Show} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSix5Show} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSeven5Show} >Day 7</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map1} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5'>
        <div><span className='mr-2 days' onClick={handleOne5Show}>Day 1:</span><span>Arrive in Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwo5Show}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThree5Show}>Day 3:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFour5Show}>Day 4:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFive5Show}>Day 5:</span><span>Tuscany day trip</span></div>
        <div><span className='mr-2 days' onClick={handleSix5Show}>Day 6:</span><span>Pisa</span></div>
        <div><span className='mr-2 days' onClick={handleSeven5Show}>Day 7:</span><span>Cinque Terre</span></div>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary5