import { Zoom } from "swiper";

export const LOADING = " LOADING";
export const SET_PLACES = 'SET_PLACES'
export const FETCHED_PLACES = 'FETCHED_PLACES'

export const setLoading =isLoading =>({
   type:LOADING,
   payload: isLoading
 });

export const setPlaces = places =>({
   type: SET_PLACES,
   payload: places
 });

 export const fetchedPlaces = places =>({
   type: FETCHED_PLACES,
   payload: places
 });


const getLocationFromString = async (name) => {
   const params = new URLSearchParams({
      query: name
   })

   const URL = 'https://travel-advisor.p.rapidapi.com/locations/search?' + params
   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '72d74d5742msh671ddd3c5e94affp104bd1jsn0efe2b07cb3c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

   return fetch(URL, options)
      .then(response => response.json())
      .then(json => {
         const cities = json.data.filter(r => r.result_type === "geos")
   
         if (cities.length <= 0) 
            return undefined

         return cities[0].result_object.location_id
      })
      .catch(err => console.error(err));
}

const getRestaurantsFromLocationId = async (locationId) => {
   const params = new URLSearchParams({
      location_id: locationId
   })

   const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list?' + params
   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '72d74d5742msh671ddd3c5e94affp104bd1jsn0efe2b07cb3c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

   return fetch(URL, options)
      .then(response => response.json())
      .then(json => {
         return json.data.filter(p => p.latitude !== undefined && p.longitude !== undefined)
      })
      .catch(err => console.error(err));
}

const getRestaurantsFromCoordinates = async (coordinates) => {
   const params = new URLSearchParams({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      limit: 60,
   })

   const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?' + params
   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '72d74d5742msh671ddd3c5e94affp104bd1jsn0efe2b07cb3c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

   return fetch(URL, options)
      .then(response => response.json())
      .then(json => {
         return json.data.filter(p => p.latitude !== undefined && p.longitude !== undefined)
      })
      .catch(err => console.error(err));
}


export const getPlacesForCity = (cityName) => {
   return async (dispatch) => {
      console.log("Searching: " + cityName)

      const locationId = await getLocationFromString(cityName)
      const restaurants = await getRestaurantsFromLocationId(locationId)
      console.log("Fetched: " + restaurants) 

      dispatch(fetchedPlaces(restaurants))
   }
}

export const getPlacesInCurrentPosition = () => {
   return async (dispatch) => {
      try {
            const position = await getPosition();

            const crd = position.coords;
         
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);

            const restaurants = await getRestaurantsFromCoordinates(crd)
            console.log("Fetched: " + restaurants) 

            dispatch(fetchedPlaces(restaurants))
      } catch (err) {
            console.error(err.message);

            const crd = { latitude: 45.465, longitude: 9.186 };
            const restaurants = await getRestaurantsFromCoordinates(crd)

            dispatch(fetchedPlaces(restaurants))
      }
   }
}


function getPosition() {
   return new Promise((resolve, reject) => 
       navigator.geolocation.getCurrentPosition(resolve, reject)
   );
}