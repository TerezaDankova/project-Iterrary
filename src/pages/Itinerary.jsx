import { Container, ListGroup, Button, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPicturesWithThunk } from '../app/redux/actions/actions';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { Image } from 'react-bootstrap';

const mapStateToProps = state => {
  return{
    loadState: state.logic.loading,
    cityPictures: state.logic.getPictures,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setQuery: query => {
      dispatch(getPicturesWithThunk(query))
    }
  }
}

const Itinerary = (props) => {

  const navigate = useNavigate();
  const goToCityPage = () => {
    navigate("/city");
  };

  useEffect(()=> {
    props.setQuery("milan")
  }, [])


  return (
    <>
    {console.log("loading:", props.loadState)}
    <Container>
      {props.loadState && <Loader/>}
      <h1 className="my-3" style={{ textAlign: "center" }}> TRIP ITINERARY LIST </h1>
      <h6 style={{ textAlign: "center" }}>ROME - FLORENCE - VERONA - VENEZIA</h6>

      <ListGroup className='justify-content-center my-3' horizontal>
        <ListGroup.Item>Day 1</ListGroup.Item>
        <ListGroup.Item>Day 2</ListGroup.Item>
        <ListGroup.Item>Day 3</ListGroup.Item>
        <ListGroup.Item>Day 4</ListGroup.Item>
        <ListGroup.Item>Day 5</ListGroup.Item>
        <ListGroup.Item>Day 6</ListGroup.Item>
        <ListGroup.Item>Day 7</ListGroup.Item>
        <ListGroup.Item>Day 8</ListGroup.Item>
        <ListGroup.Item>Day 9</ListGroup.Item>
        <ListGroup.Item>Day 10</ListGroup.Item>
      </ListGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)