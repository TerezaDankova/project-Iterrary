import { Container, ListGroup, Button, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { useEffect } from 'react';
import Loader from '../components/Loader';
import { Image } from 'react-bootstrap';


const Itinerary = (props) => {

  const navigate = useNavigate();
  const goToCityPage = () => {
    navigate("/city");
  };


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3" style={{ textAlign: "center" }}> TRIP ITINERARY LIST </h1>
      <h6 style={{ textAlign: "center" }}>ROME - FLORENCE - VERONA - VENEZIA</h6>
    <Row className='mt-3'>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px", textAlign: "center", padding: "10px" }}>Day 1</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 2</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 3</div>
      <div className="mr-3" style={{ width: "80px", border: "1px solid black", borderRadius: "5px",textAlign: "center", padding: "10px" }}>Day 4</div>
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