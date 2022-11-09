import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';
import Map7 from '../pictures/map7.jpg'
import './css/Itinerary.css'
import OneModal7 from '../components/ItinerariesPage/Itinerary7Modal/OneModal7';
import TwoModal7 from '../components/ItinerariesPage/Itinerary7Modal/TwoModal7';
import ThreeModal7 from '../components/ItinerariesPage/Itinerary7Modal/ThreeModal7';
import FourModal7 from '../components/ItinerariesPage/Itinerary7Modal/FourModal7';
import FiveModal7 from '../components/ItinerariesPage/Itinerary7Modal/FiveModal7';
import SixModal7 from '../components/ItinerariesPage/Itinerary7Modal/SixModal7';
import SevenModal7 from '../components/ItinerariesPage/Itinerary7Modal/SevenModal7';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";


const Itinerary7 = (props) => {

  const [one7Show, setOne7Show] = useState(false);
  const handleOne7Show = () => setOne7Show(true);
  const [two7Show, setTwo7Show] = useState(false);
  const handleTwo7Show = () => setTwo7Show(true);
  const [three7Show, setThree7Show] = useState(false);
  const handleThree7Show = () => setThree7Show(true);
  const [four7Show, setFour7Show] = useState(false);
  const handleFour7Show = () => setFour7Show(true);
  const [five7Show, setFive7Show] = useState(false);
  const handleFive7Show = () => setFive7Show(true);
  const [six7Show, setSix7Show] = useState(false);
  const handleSix7Show = () => setSix7Show(true);
  const [seven7Show, setSeven7Show] = useState(false);
  const handleSeven7Show = () => setSeven7Show(true);

  const location = useLocation(); 
  console.log("LOCATION pathname", location.pathname);

  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">CATANIA - ETNA - TAORMINA - NOTO</h6>


      <OneModal7 one7Show={one7Show} setOne7Show={setOne7Show}/>
      <TwoModal7 two7Show={two7Show} setTwo7Show={setTwo7Show}/>
      <ThreeModal7 three7Show={three7Show} setThree7Show={setThree7Show}/>
      <FourModal7 four7Show={four7Show} setFour7Show={setFour7Show}/>
      <FiveModal7 five7Show={five7Show} setFive7Show={setFive7Show}/>
      <SixModal7 six7Show={six7Show} setSix7Show={setSix7Show}/>
      <SevenModal7 seven7Show={seven7Show} setSeven7Show={setSeven7Show}/>
   


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOne7Show} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwo7Show} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThree7Show} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFour7Show} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFive7Show} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSix7Show} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSeven7Show} >Day 7</span>
    </Row>
    <Row>
      <Col sm={7}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map7} fluid/>
      </div>
      </Col>
      <Col sm={5}>
      <div className='mt-5 box-days p-4'>
        <div><span className='mr-2 days' onClick={handleOne7Show}>Day 1:</span><span>Catania</span></div>
        <div><span className='mr-2 days' onClick={handleTwo7Show}>Day 2:</span><span>Etna & Taormina</span></div>
        <div><span className='mr-2 days' onClick={handleThree7Show}>Day 3:</span><span>Siracuga & Oritiga </span></div>
        <div><span className='mr-2 days' onClick={handleFour7Show}>Day 4:</span><span>Laghetti Di Cavagrande & Marzameni & Noto</span></div>
        <div><span className='mr-2 days' onClick={handleFive7Show}>Day 5:</span><span>Modica & Scicli & Ragusa Ibla</span></div>
        <div><span className='mr-2 days' onClick={handleSix7Show}>Day 6:</span><span>Ragusa Ibla & Caltagirone & Catania</span></div>
        <div><span className='mr-2 days' onClick={handleSeven7Show}>Day 7:</span><span>Aci Castello & Acireale</span></div>
      </div>
      <div className='box-link2'>
        <Link to="/itineraries"
                    className={location.pathname === "/itineraries" ? "nav-link-it active" : "nav-link-it"}
              > GO BACK <RiIcons.RiArrowGoBackFill className='mb-1' size={20}/>
        </Link>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary7