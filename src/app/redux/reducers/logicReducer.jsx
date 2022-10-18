import { initialState } from "../store/store";
import { LOADING, GET_CITY_PICTURE } from "../actions/actions";

const logicReducer = (state = initialState.logic, action) => {
   switch (action.type) {
     case LOADING:
         return {
         ...state,
         loading: action.payload      
         };  

     case GET_CITY_PICTURE:
         return {
         ...state,
         cityPictures: [...state.cityPictures, ...action.payload] 
         };  

      default:
         return state; 
    }
  };
export default logicReducer;