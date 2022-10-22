import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import {persistor, store } from './app/redux/store/store';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 <Provider store={store}>
        {/* <PersistGate persistor={persistor}>    */}
    <App />
        {/* </PersistGate>  */}
  </Provider>
);


