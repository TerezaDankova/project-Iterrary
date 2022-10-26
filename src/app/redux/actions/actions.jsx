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



export const getPlacesData = () => {

   const params = new URLSearchParams({
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
   })

   const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?' + params
   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '72d74d5742msh671ddd3c5e94affp104bd1jsn0efe2b07cb3c',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

return async (dispatch) => {
   try {
      const response = await fetch(URL, options)
      if (response.ok) {
         const json = await response.json()
         const data = json.data.filter(p => p.latitude !== undefined && p.longitude !== undefined)
         
         dispatch(fetchedPlaces(data))
      } else {
         alert('Error fetching results')
       }

   } catch (error) {
      console.log(error)

   }
}
}