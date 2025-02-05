import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+ (concurrent rendering)
import './index.css';  // Global styles (you can add custom styles here)
import App from './App';  // Main app component
import { BrowserRouter as Router } from 'react-router-dom';  // React Router for navigation (optional)
import reportWebVitals from './reportWebVitals';  // Optional: to measure performance

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Create the root React element (using React 18+ concurrent rendering)
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(
  <Router>  {/* Wrap with Router if using React Router */}
    <App />
  </Router>
);

// Optional: Track performance metrics of your app (can be helpful for production apps)
reportWebVitals();
