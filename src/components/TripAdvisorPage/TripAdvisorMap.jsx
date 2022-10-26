import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react'

import { ThemeProvider } from 'react-bootstrap'
import TripAdvisorMarker from './TripAdvisorMarker'



const getBoundingBox = (places) => {
   const minLatitude = Math.min(...places.map(o => Number(o.latitude)))
   const maxLatitude = Math.max(...places.map(o => Number(o.latitude)))
   const minLongitude = Math.min(...places.map(o => Number(o.longitude)))
   const maxLongitude = Math.max(...places.map(o => Number(o.longitude)))

   return {
      ne: { lat: minLatitude, lng: maxLongitude },
      sw: { lat: maxLatitude, lng: minLongitude }
   }
}

const getCenterAndZoom = (places) => {
   if (places.length === 0) {
      return { center: { lat: 0, lng: 0}, zoom: 14 }
   }

   const bounds = getBoundingBox(places)
   const size = {
      width: 1110, // Map width in pixels
      height: 500, // Map height in pixels
    }

   return fitBounds(bounds, size)
}


const TripAdvisorMap = (props) => {
   const { center, zoom } = getCenterAndZoom(props.places)

   return (
      <ThemeProvider 
      breakpoints={['md']}
      >
         <div style={{ height: '500px', width: '100%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAIa8ut-4q_aq4ZKLFxnkvazkqvJga73kw'}}
            center={center}
            zoom={zoom}
            margin={[10, 10, 10, 10]}
            // options={''}
            // onChange={''}
            // onChildClick={''}
         >
            {props.places.map((p, index) => (
               <TripAdvisorMarker key={index} lat={Number(p.latitude)} lng={Number(p.longitude)} name={p.name} /* Kreyser Avrora */ />
            ))}
         </GoogleMapReact>
         </div>

      </ThemeProvider>
   )
}
export default TripAdvisorMap