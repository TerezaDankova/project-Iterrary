import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';

import Map6 from '../pictures/map6.jpg'
import './css/Itinerary.css'

import OneModal6 from '../components/ItinerariesPage/Itinerary6Modal/OneModal6';
import TwoModal6 from '../components/ItinerariesPage/Itinerary6Modal/TwoModal6';
import ThreeModal6 from '../components/ItinerariesPage/Itinerary6Modal/ThreeModal6';
import FourModal6 from '../components/ItinerariesPage/Itinerary6Modal/FourModal6';
import FiveModal6 from '../components/ItinerariesPage/Itinerary6Modal/FiveModal6';
import SixModal6 from '../components/ItinerariesPage/Itinerary6Modal/SixModal6';
import SevenModal6 from '../components/ItinerariesPage/Itinerary6Modal/SevenModal6';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";

const Itinerary6 = (props) => {

  const [one6Show, setOne6Show] = useState(false);
  const handleOne6Show = () => setOne6Show(true);
  const [two6Show, setTwo6Show] = useState(false);
  const handleTwo6Show = () => setTwo6Show(true);
  const [three6Show, setThree6Show] = useState(false);
  const handleThree6Show = () => setThree6Show(true);
  const [four6Show, setFour6Show] = useState(false);
  const handleFour6Show = () => setFour6Show(true);
  const [five6Show, setFive6Show] = useState(false);
  const handleFive6Show = () => setFive6Show(true);
  const [six6Show, setSix6Show] = useState(false);
  const handleSix6Show = () => setSix6Show(true);
  const [seven6Show, setSeven6Show] = useState(false);
  const handleSeven6Show = () => setSeven6Show(true);

  const location = useLocation(); 
  console.log("LOCATION pathname", location.pathname);

  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">ROME - NAPLES - AMALFI COAST - MATERA</h6>


      <OneModal6 one6Show={one6Show} setOne6Show={setOne6Show}/>
      <TwoModal6 two6Show={two6Show} setTwo6Show={setTwo6Show}/>
      <ThreeModal6 three6Show={three6Show} setThree6Show={setThree6Show}/>
      <FourModal6 four6Show={four6Show} setFour6Show={setFour6Show}/>
      <FiveModal6 five6Show={five6Show} setFive6Show={setFive6Show}/>
      <SixModal6 six6Show={six6Show} setSix6Show={setSix6Show}/>
      <SevenModal6 seven6Show={seven6Show} setSeven6Show={setSeven6Show}/>
   


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOne6Show} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwo6Show} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThree6Show} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFour6Show} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFive6Show} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSix6Show} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSeven6Show} >Day 7</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map6} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5 box-days p-4'>
        <div><span className='mr-2 days' onClick={handleOne6Show}>Day 1:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwo6Show}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThree6Show}>Day 3:</span><span>Naples & Amalfi Coast</span></div>
        <div><span className='mr-2 days' onClick={handleFour6Show}>Day 4:</span><span>Naples & Amalfi Coast</span></div>
        <div><span className='mr-2 days' onClick={handleFive6Show}>Day 5:</span><span>Naples & Amalfi Coast</span></div>
        <div><span className='mr-2 days' onClick={handleSix6Show}>Day 6:</span><span>Matera</span></div>
        <div><span className='mr-2 days' onClick={handleSeven6Show}>Day 7:</span><span>Matera</span></div>
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

export default Itinerary6