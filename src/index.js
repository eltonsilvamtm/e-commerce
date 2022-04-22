// import React from 'react';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import reducer, {initialState} from "./reducer"
// import {StateProvider} from "./StateProvider"
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<React.StrictMode>
//   <StateProvider initialState={initialState} reducer={reducer}>
//   <App />
//   </StateProvider>
// </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();