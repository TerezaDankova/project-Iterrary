import { Container, ListGroup, Button, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Itinerary = () => {

const navigate = useNavigate()
const goToCityPage = () => {
navigate("/city")
}
  return (
    <Container>
        <h1 className="my-3" style={{textAlign: "center"}}> TRIP ITINERARY LIST </h1>
        <h6 style={{textAlign: "center"}}>title</h6>
        <ListGroup className='justify-content-center my-3' horizontal>
              <ListGroup.Item>Numbers</ListGroup.Item>
        </ListGroup>
        <div className="my-5" style={{textAlign: "center"}} >
              Map
        </div>
        <div className='mt-4'style={{textAlign: "center"}}>
              Details/ inside will be link(name of the city) 
              which brings you to another page.
                
        </div>
        <Row className='mt-5 mx-auto'  >
            <Col>
                <Button className='buttonCity'
                variant="outline-primary"
                        style={{color: 'white', width: "200px", backgroundColor: "green"}} 
                        onClick={goToCityPage}> 
                        CITY
                </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Itinerary