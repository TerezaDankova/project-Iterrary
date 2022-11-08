import { initialState } from "../store/store";
import { LOADING, SET_PLACES, FETCHED_PLACES, FETCHED_CURRENT_POSITION, SELECTED_PLACE } from "../actions/actions";

const tripAdvisorReducer = (state = initialState.tripAdvisor, action) => {
   switch (action.type) {
     case LOADING:
         return {
         ...state,
         loading: action.payload      
         };  

     case SET_PLACES:
      return {
      ...state,
      places: [...state.places, ...action.payload] 
      };  
      
      case FETCHED_PLACES:
        return {
        ...state,
        selectedPlace: null,
        places: [...action.payload] 
        };  

      case FETCHED_CURRENT_POSITION:
        return {
          ...state,
          position: action.payload
        }

      case SELECTED_PLACE:
        return {
          ...state,
          selectedPlace: action.payload
        }
        
      default:
         return state; 
    }
  };
export default tripAdvisorReducer;