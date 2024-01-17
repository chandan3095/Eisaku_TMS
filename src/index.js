import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <App />
            </PersistGate>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);

reportWebVitals();
