import { Autocomplete } from "@react-google-maps/api"
import { Container, InputGroup, FormControl } from "react-bootstrap"



const TripAdvisorHeader = () => {
   return (
      <Container>
         <div >
            <h5> Travel Advisor
            </h5>
            <div>
               <h6> Explore new places:
               </h6>
               {/* <Autocomplete> */}
                  <div>
                     <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                           <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                           placeholder="Username"
                           aria-label="Username"
                           aria-describedby="basic-addon1"
                        />
                     </InputGroup>
                  </div>
               {/* </Autocomplete> */}

            </div>
         </div>

      </Container>
   )
}
export default TripAdvisorHeader