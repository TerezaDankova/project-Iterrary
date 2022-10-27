import React from "react"
import { Card } from "react-bootstrap"

const TripAdvisorMarker = (place) => {
   return (
 
    
       <Card style={{ width: '9rem', height: '10rem', position: 'absolute', transform: 'translate(-100%, -50%)' }}>
            <Card.Img style={{ width: '9rem', height: '6rem' }} variant="top" src={place.photo ? place.photo.images.large.url : 'https://cdnkdc.azureedge.net/cdprod/Media/images/blog/13-2019-trends' } />
            <Card.Body>
              <p style={{fontSize: '12px'}}>{place.name}</p> 
            </Card.Body>
       </Card>
       
     
   )
}
export default TripAdvisorMarker