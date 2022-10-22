
import { Container } from "react-bootstrap"
import TripAdvisorHeader from "../components/TripAdvisorPage/TripAdvisorHeader"
import TripAdvisorList from "../components/TripAdvisorPage/TripAdvisorList"
import TripAdvisorMap from "../components/TripAdvisorPage/TripAdvisorMap"
import TripAdvisorPlaceDetails from "../components/TripAdvisorPage/TripAdvisorPlaceDetails"


const TripAdvisor = () => {


   return (
      <Container>
         <TripAdvisorHeader />
         <TripAdvisorList />
         <TripAdvisorMap />
         <TripAdvisorPlaceDetails />
      </Container>
   )
}
export default TripAdvisor