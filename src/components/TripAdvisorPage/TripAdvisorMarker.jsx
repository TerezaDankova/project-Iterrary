import React from "react"
import * as ImIcons from "react-icons/im";

const TripAdvisorMarker = (props) => {
    const style = {
      position: 'absolute',
      transform: 'translate(-50%, -100%)'
    }

   return (
       <div onClick={props.onClick} style={style}>
         <ImIcons.ImLocation
            style={{ color: props.$hover ? "green" : "black" }}
            lat={Number(props.lat)}
            lng={Number(props.lng)}
            size={props.size} />
       </div>
   )
}
export default TripAdvisorMarker