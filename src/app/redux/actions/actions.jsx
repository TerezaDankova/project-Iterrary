export const LOADING = " LOADING";
export const GET_CITY_PICTURE = 'GET_CITY_PICTURE'

export const setLoading =isLoading =>({
   type:LOADING,
   payload: isLoading
 });
 
export const getPictures = query =>({
   type: GET_CITY_PICTURE,
   payload: query
 });

 export const getPicturesWithThunk = (query) => {

  const options = { method: "GET", headers: 
       { Authorization: "Bearer 563492ad6f91700001000001c2eb2a7658f0461388935ac5627a5a53",},};
    
    const baseEndpoint = `https://api.pexels.com/v1/search?=${query}`

 return async (dispatch) => {
   try {
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
         const  data  = await response.json()
         dispatch(getPictures(data))
      } else {
         alert('Error fetching results')
       }
      } catch (error) {
         console.log(error) 
      } finally {
         dispatch(setLoading(false));}
 }
}