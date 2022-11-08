import { useEffect } from "react"
import { Col } from "react-bootstrap";
import TripAdvisorPlaceDetails from "./TripAdvisorPlaceDetails";
import { Image } from "react-bootstrap";



const TripAdvisorList =  (props) => {


   useEffect(() => {
     console.log(props.selectedPlace)
   })
   

   return (
  
      <div>
      
            <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
            
            <div className="pl-3" style={{fontSize: '18px', textTransform: 'uppercase', color: 'orange'}}> 
            <span style={{color: 'black'}}>SELECTED RESTAURANT:</span>
            <br/>
             {props.selectedPlace?.name}
            </div>
         

            {props.places.map((place, i) => (
            <Col md={12} key={i}>
                 <TripAdvisorPlaceDetails place={place} />
            </Col>
            ) )}
         </div> 
         </div>
     

   )
}
export default TripAdvisorList