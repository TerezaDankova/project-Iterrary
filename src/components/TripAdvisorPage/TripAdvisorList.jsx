import { useState } from "react"
import { Col } from "react-bootstrap";
import TripAdvisorPlaceDetails from "./TripAdvisorPlaceDetails";




const TripAdvisorList =  (props) => {
   const [type, setType] = useState('restaurants');
   const [rating, setRating] = useState('');


   return (
  
      <div>
         <h4>
            Restaurants, Hotels & Attractions around you
         </h4>
         <form>
            <label>Type
                     <select defaultValue="Choose..." 
                       value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="restaurants">
                           Restaurants
                        </option>
                        <option value="hotels">
                           Hotels
                        </option>
                        <option value="attractions">
                           Attractions
                        </option>
                     </select>
            </label>
            <br />
            <label>Rating
                        <select defaultValue="Choose..." 
                        value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value={0}>
                           All
                           </option>
                           <option value={3}>
                           Above 3.0
                           </option>
                           <option value={4}>
                              Above 4.0
                           </option>
                           <option value={4.5}>
                              Above 4.5
                           </option>
                        </select>
               </label>
            </form>
     
           <div>
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