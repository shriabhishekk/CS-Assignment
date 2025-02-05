import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Make sure you have App.js in the same folder
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This links to the <div id="root"></div> in index.html
);

reportWebVitals(); // Optional for performance tracking
