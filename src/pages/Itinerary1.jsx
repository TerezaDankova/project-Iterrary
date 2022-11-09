import { Container, Row, Image, Col} from 'react-bootstrap';
import Loader from '../components/Loader';
import { useState } from 'react';
import OneModal from '../components/ItinerariesPage/Itinerary1Modal/OneModal';
import TwoModal from '../components/ItinerariesPage/Itinerary1Modal/TwoModal';
import ThreeModal from '../components/ItinerariesPage/Itinerary1Modal/ThreeModal';
import FourModal from '../components/ItinerariesPage/Itinerary1Modal/FourModal';
import FiveModal from '../components/ItinerariesPage/Itinerary1Modal/FiveModal';
import SixModal from '../components/ItinerariesPage/Itinerary1Modal/SixModal';
import SevenModal from '../components/ItinerariesPage/Itinerary1Modal/SevenModal';
import EightModal from '../components/ItinerariesPage/Itinerary1Modal/EightModal';
import NineModal from '../components/ItinerariesPage/Itinerary1Modal/NineModal';
import TenModal from '../components/ItinerariesPage/Itinerary1Modal/TenModal';
import Map1 from '../pictures/map1.jpg'
import './css/Itinerary.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";


const Itinerary = (props) => {

  const [oneShow, setOneShow] = useState(false);
  const handleOneShow = () => setOneShow(true);
  const [twoShow, setTwoShow] = useState(false);
  const handleTwoShow = () => setTwoShow(true);
  const [threeShow, setThreeShow] = useState(false);
  const handleThreeShow = () => setThreeShow(true);
  const [fourShow, setFourShow] = useState(false);
  const handleFourShow = () => setFourShow(true);
  const [fiveShow, setFiveShow] = useState(false);
  const handleFiveShow = () => setFiveShow(true);
  const [sixShow, setSixShow] = useState(false);
  const handleSixShow = () => setSixShow(true);
  const [sevenShow, setSevenShow] = useState(false);
  const handleSevenShow = () => setSevenShow(true);
  const [eightShow, setEightShow] = useState(false);
  const handleEightShow = () => setEightShow(true);
  const [nineShow, setNineShow] = useState(false);
  const handleNineShow = () => setNineShow(true);
  const [tenShow, setTenShow] = useState(false);
  const handleTenShow = () => setTenShow(true);

  const location = useLocation(); 
  console.log("LOCATION pathname", location.pathname);

  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3 textMain"> TRIP ITINERARY LIST </h1>
      <h6 className="textCity">ROME - FLORENCE - CINQUE TERRE - MILAN - VENICE</h6>


      <OneModal oneShow={oneShow} setOneShow={setOneShow}/>
      <TwoModal twoShow={twoShow} setTwoShow={setTwoShow}/>
      <ThreeModal threeShow={threeShow} setThreeShow={setThreeShow}/>
      <FourModal fourShow={fourShow} setFourShow={setFourShow}/>
      <FiveModal fiveShow={fiveShow} setFiveShow={setFiveShow}/>
      <SixModal sixShow={sixShow} setSixShow={setSixShow}/>
      <SevenModal sevenShow={sevenShow} setSevenShow={setSevenShow}/>
      <EightModal eightShow={eightShow} setEightShow={setEightShow}/>
      <NineModal nineShow={nineShow} setNineShow={setNineShow}/>
      <TenModal tenShow={tenShow} setTenShow={setTenShow}/>


    <Row className='mt-3 mb-3 flex-grow-1 d-flex justify-content-center'>
      <span className="mr-3 btnGreen" onClick={handleOneShow} >Day 1</span>
      <span className="mr-3 btnGreen" onClick={handleTwoShow} >Day 2</span>
      <span className="mr-3 btnGreen" onClick={handleThreeShow} >Day 3</span>
      <span className="mr-3 btnGreen" onClick={handleFourShow} >Day 4</span>
      <span className="mr-3 btnGreen" onClick={handleFiveShow} >Day 5</span>
      <span className="mr-3 btnGreen" onClick={handleSixShow} >Day 6</span>
      <span className="mr-3 btnGreen" onClick={handleSevenShow} >Day 7</span>
      <span className="mr-3 btnGreen" onClick={handleEightShow} >Day 8</span>
      <span className="mr-3 btnGreen" onClick={handleNineShow} >Day 9</span>
      <span className="mr-3 btnGreen" onClick={handleTenShow} >Day 10</span>
    </Row>
    <Row>
      <Col sm={8}>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Image className="mapImage" src={Map1} fluid/>
      </div>
      </Col>
      <Col sm={4}>
      <div className='mt-5 box-days p-4'>
        <div><span className='mr-2 days' onClick={handleOneShow}>Day 1:</span><span>Arrive in Rome</span></div>
        <div><span className='mr-2 days' onClick={handleTwoShow}>Day 2:</span><span>Rome</span></div>
        <div><span className='mr-2 days' onClick={handleThreeShow}>Day 3:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFourShow}>Day 4:</span><span>Florence</span></div>
        <div><span className='mr-2 days' onClick={handleFiveShow}>Day 5:</span><span>Tuscany day trip</span></div>
        <div><span className='mr-2 days' onClick={handleSixShow}>Day 6:</span><span>Pisa</span></div>
        <div><span className='mr-2 days' onClick={handleSevenShow}>Day 7:</span><span>Cinque Terre</span></div>
        <div><span className='mr-2 days' onClick={handleEightShow}>Day 8:</span><span>Milan</span></div>
        <div><span className='mr-2 days' onClick={handleNineShow}>Day 9:</span><span>Venice</span></div>
        <div><span className='mr-2 days' onClick={handleTenShow}>Day 10:</span><span>Fly home</span></div>
      </div>
      <div className='box-link'>
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

export default Itinerary