import GoogleMapReact from 'google-map-react'
import { ThemeProvider } from 'react-bootstrap'



const TripAdvisorMap = () => {
   const coordinates = { lat: 0, lng: 0}


   return (
      <ThemeProvider 
      breakpoints={['md']}
      >
         <div style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAIa8ut-4q_aq4ZKLFxnkvazkqvJga73kw'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            // options={''}
            // onChange={''}
            // onChildClick={''}
         >
         </GoogleMapReact>
         </div>

      </ThemeProvider>
   )
}
export default TripAdvisorMap