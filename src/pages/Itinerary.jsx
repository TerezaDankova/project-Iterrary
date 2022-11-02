import { Container, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { Image } from 'react-bootstrap';
import OneModal from '../components/ItinerariesPage/Itinerary1Modal/OneModal';
import TwoModal from '../components/ItinerariesPage/Itinerary1Modal/TwoModal';
import { useState } from 'react';
import ThreeModal from '../components/ItinerariesPage/Itinerary1Modal/ThreeModal';
import FourModal from '../components/ItinerariesPage/Itinerary1Modal/FourModal';



const Itinerary = (props) => {

  const navigate = useNavigate();
  const goToCityPage = () => {
    navigate("/city");
  };

  const [oneShow, setOneShow] = useState(false);
  const handleOneShow = () => setOneShow(true);
  const [twoShow, setTwoShow] = useState(false);
  const handleTwoShow = () => setTwoShow(true);
  const [threeShow, setThreeShow] = useState(false);
  const handleThreeShow = () => setThreeShow(true);
  const [fourShow, setFourShow] = useState(false);
  const handleFourShow = () => setFourShow(true);


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3" style={{ textAlign: "center" }}> TRIP ITINERARY LIST </h1>
      <h6 style={{ textAlign: "center" }}>ROME - FLORENCE - VERONA - VENEZIA</h6>


      <OneModal oneShow={oneShow} setOneShow={setOneShow}/>
      <TwoModal twoShow={twoShow} setTwoShow={setTwoShow}/>
      <ThreeModal threeShow={threeShow} setThreeShow={setThreeShow}/>
      <FourModal fourShow={fourShow} setFourShow={setFourShow}/>


    <Row className='mt-3'>
      <span className="mr-3" onClick={handleOneShow} style={{ width: "80px", border: "1px solid black", borderRadius: "5px", textAlign: "center", padding: "10px" }}>Day 1</span>
      <span className="mr-3" onClick={handleTwoShow} style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 2</span>
      <span className="mr-3" onClick={handleThreeShow} style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 3</span>
      <span className="mr-3" onClick={handleFourShow} style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 4</span>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 5</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 6</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 7</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 8</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 9</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 10</div>
    </Row>
  

      <div className="my-5" style={{ textAlign: "center" }}>
        Map
      </div>
      <div className='mt-4' style={{ textAlign: "center" }}>
        Details/ inside will be link(name of the city)
        which brings you to another page.
        {props.cityPictures &&
             props.cityPictures.map((photos, i) => {
               return <div key={i}>
                      <Image src={photos.src.original}/>
                 </div>
             })}
      </div>
      <Row className='mt-5 mx-auto'>
        <Col>
          <Button className='buttonCity'
            variant="outline-primary"
            style={{ color: 'white', width: "200px", backgroundColor: "green", position: "absolute", top: "0", left: "450px"}}
            onClick={goToCityPage}>
            CITY
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Itinerary