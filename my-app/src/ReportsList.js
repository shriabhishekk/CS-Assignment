import React, { useEffect, useState } from 'react';

const ReportsList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/reports')
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error('Error fetching reports:', error));
  }, []); 

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report, index) => (
          <li key={report._id}>
            <h3>{report.name}</h3>
            <p>Mobile: {report.mobilePhone}</p>
            <p>PAN: {report.pan}</p>
            <p>Credit Score: {report.creditScore}</p>
            <p>Active Accounts: {report.reportSummary.activeAccounts}</p>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsList;
