import { useEffect } from "react"
import { Col } from "react-bootstrap";
import TripAdvisorPlaceDetails from "./TripAdvisorPlaceDetails";



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
             <div>{props.selectedPlace?.name}</div>
             
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