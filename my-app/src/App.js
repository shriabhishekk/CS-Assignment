import React from 'react';
import './App.css';
import ReportsList from './ReportsList'; // Import the ReportsList component

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Credit Report Viewer</h1>
      <ReportsList /> {/* Render the ReportsList component here */}
    </div>
  );
}

export default App;
