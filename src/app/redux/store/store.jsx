import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import tripAdvisorReducer from '../reducers/tripAdvisorReducer';


const persistConfig = {
  key: 'root',
  storage
}


export const initialState = {
   tripAdvisor: { loading: true, places: [], position: null, selectedPlace: null }
} 

const bigReducer = combineReducers({
    tripAdvisor: tripAdvisorReducer
  });

const persistedReducer = persistReducer(persistConfig, bigReducer)



export const store = configureStore({
  reducer:bigReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store);