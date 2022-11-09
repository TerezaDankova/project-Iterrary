
import { Container, InputGroup, FormControl } from "react-bootstrap"
import { getPlacesForCity } from "../../app/redux/actions/actions"
import { connect } from "react-redux"
import { useState} from "react"

const mapDispatchToProps = dispatch => {
   return {
      getPlacesForCity: (cityName) => {
         dispatch(getPlacesForCity(cityName))
      }
   }
}

const TripAdvisorHeader = ({getPlacesForCity}) => {
   const [city, setCity] = useState("")
  

   const handleInputChange = (e) => {
      setCity( e.target.value )
      console.log(e.target.value)
   }

   const onSubmit = (event) => {
      event.preventDefault()
      getPlacesForCity(city)
    }

   return (
      <Container>
         <div >
         
            <div>
               <h6> Where?
               </h6>
                  <form onSubmit={onSubmit} >
                     <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl
                           onChange={handleInputChange}
                           placeholder="Location"
                           aria-label="Location"
                           aria-describedby="basic-addon1"
                        />
                     </InputGroup>
                  </form>
            </div>
         </div>

      </Container>
   )
}
export default connect(null, mapDispatchToProps)(TripAdvisorHeader)