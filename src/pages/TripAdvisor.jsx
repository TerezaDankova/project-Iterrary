
import { Container, Row, Col } from "react-bootstrap"
import TripAdvisorHeader from "../components/TripAdvisorPage/TripAdvisorHeader"
import TripAdvisorList from "../components/TripAdvisorPage/TripAdvisorList"
import TripAdvisorMap from "../components/TripAdvisorPage/TripAdvisorMap"
import { useEffect } from "react"
import { connect } from "react-redux"
import { getPlacesInCurrentPosition, selectedPlace } from "../app/redux/actions/actions";


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

   return (
      <Container>
         <TripAdvisorHeader />
         <div className="mt-5 mb-5">
         <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', letterSpacing: '4px'}}>
           THESE ARE THE RESTAURANTS AROUND YOU!
         </h4>
         </div>
         <Row>
            <Col sm={4}>
                <TripAdvisorList places={props.places} selectedPlace={props.selectedPlace} />          
            </Col>
            <Col sm={8}>
               <TripAdvisorMap places={props.places} currentPosition={props.position} onSelectPlace={p => props.setSelectedPlace(p)} />
            </Col>
         </Row>
      </Container>
   )
}
export default connect(mapStateToProps, mapDispatchToProps)(TripAdvisor)