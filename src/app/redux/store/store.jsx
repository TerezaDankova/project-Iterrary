import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logicReducer from '../reducers/logicReducer';


const persistConfig = {
  key: 'root',
  storage
}


export const initialState = {
   logic: {loading: true, cityPictures: []}
} 

const bigReducer = combineReducers({
   logic:logicReducer
  });

const persistedReducer = persistReducer(persistConfig, bigReducer)



export const store = configureStore({
  reducer:bigReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store);