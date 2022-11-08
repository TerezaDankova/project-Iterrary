import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react'
import { useEffect, useRef, useState } from 'react'
import * as FaIcons from "react-icons/fa";

import { ThemeProvider } from 'react-bootstrap'
import TripAdvisorMarker from './TripAdvisorMarker'


const getBoundingBox = (places) => {
   const minLatitude = Math.min(...places.map(o => Number(o.latitude)))
   const maxLatitude = Math.max(...places.map(o => Number(o.latitude)))
   const minLongitude = Math.min(...places.map(o => Number(o.longitude)))
   const maxLongitude = Math.max(...places.map(o => Number(o.longitude)))

   const deltaLatitude = (maxLatitude - minLatitude) / 4
   const deltaLongitude = (maxLongitude - minLongitude) / 4

   return {
      ne: { lat: minLatitude - deltaLatitude, lng: maxLongitude + deltaLongitude },
      sw: { lat: maxLatitude + deltaLatitude, lng: minLongitude - deltaLongitude }
   }
}

const getCenterAndZoom = (places, size) => {
   if (places.length === 0) {
      return { center: { lat: 0, lng: 0 }, zoom: 3 }
   }

   const bounds = getBoundingBox(places)

   return fitBounds(bounds, size)
}

const TripAdvisorMap = (props) => {
   const [size, setSize] = useState({ width: 1000, height: 500 })
   const [selectedPlace, setSelectedPlace] = useState(null)
   const { center, zoom } = getCenterAndZoom(props.places, size)

   const elementRef = useRef(null);

   const onSelectPlace = (place) => {
      props.onSelectPlace(place)
      setSelectedPlace(place)
   }

   useEffect(() => {
      const height = elementRef.current.clientHeight
      const width = elementRef.current.clientWidth

      setSize({ width: width, height: height })
   }, [])


   return (
      <ThemeProvider
         breakpoints={['md']}
      >
         <div className="" style={{ height: '500px', width: '100%' }} ref={elementRef}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: 'AIzaSyAIa8ut-4q_aq4ZKLFxnkvazkqvJga73kw' }}
               center={center}
               zoom={zoom}
               margin={[10, 10, 10, 10]}
               onClick={() => onSelectPlace(null)}
            >
               {props.currentPosition &&
               <FaIcons.FaMapPin 
                  style={{ height: '40px', width: '40px', color: 'orange', position: 'absolute',
                  transform: 'translate(-50%, -100%)' }} 
                     lat={props.currentPosition.latitude}
                     lng={props.currentPosition.longitude}
                  />
               }
               {props.places.map((p, index) => (
                  <TripAdvisorMarker
                     key={index}
                     lat={Number(p.latitude)}
                     lng={Number(p.longitude)}
                     size={selectedPlace?.location_id === p.location_id ? 40 : 30} 
                     onClick={() => onSelectPlace(p)}/>
               ))}
            </GoogleMapReact>
         </div>

      </ThemeProvider>
   )
}
export default TripAdvisorMap