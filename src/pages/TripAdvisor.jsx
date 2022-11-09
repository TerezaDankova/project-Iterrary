
import { Container, Row, Col } from "react-bootstrap"
import TripAdvisorHeader from "../components/TripAdvisorPage/TripAdvisorHeader"
import TripAdvisorList from "../components/TripAdvisorPage/TripAdvisorList"
import TripAdvisorMap from "../components/TripAdvisorPage/TripAdvisorMap"
import { useEffect } from "react"
import { connect } from "react-redux"
import { getPlacesInCurrentPosition, selectedPlace } from "../app/redux/actions/actions";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";


const mapStateToProps = state => {
   return state.tripAdvisor
}

const mapDispatchToProps = dispatch => {
   return {
      getPlaces: () => {
         dispatch(getPlacesInCurrentPosition())
      },
      setSelectedPlace: (place) => {
         dispatch(selectedPlace(place))
      }
   }
}

const TripAdvisor = (props) => {
   useEffect(() => {
      props.getPlaces();
   }, [])

   const location = useLocation(); 
   console.log("LOCATION pathname", location.pathname);
 
   return (
      <Container>
         <TripAdvisorHeader />
         <div className="mt-5 mb-5">
         <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '4px'}}>
           THESE ARE THE BEST RESTAURANTS!
         </h4>
         </div>
               <div className='box-link-rest'>
            <Link to="/"
                        className={location.pathname === "/" ? "nav-link-it active" : "nav-link-it"}
                  > GO BACK <RiIcons.RiArrowGoBackFill className='mb-1' size={20}/>
            </Link>
            </div>
         <Row>
            <Col sm={4} >
                <TripAdvisorList places={props.places} selectedPlace={props.selectedPlace} />          
            </Col>
            <Col sm={8}  className="mb-5 pb-5">
               <TripAdvisorMap places={props.places} currentPosition={props.position} onSelectPlace={p => props.setSelectedPlace(p)} />
            </Col>
         </Row>
      </Container>
   )
}
export default connect(mapStateToProps, mapDispatchToProps)(TripAdvisor)