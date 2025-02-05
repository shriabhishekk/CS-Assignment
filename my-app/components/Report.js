import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Report() {
    const [report, setReport] = useState(null);

    useEffect(() => {
        axios.get('https://cs-assignment.onrender.com/api/report')
            .then(response => {
                setReport(response.data);
            })
            .catch(error => {
                console.error('Error fetching the report:', error);
            });
    }, []);

    return (
        <div>
            {report ? (
                <div>
                    <h1>{report.name}</h1>
                    <p>Mobile: {report.mobilePhone}</p>
                    <p>PAN: {report.pan}</p>
                    <p>Credit Score: {report.creditScore}</p>
                    <h3>Report Summary</h3>
                    <p>Total Accounts: {report.reportSummary.totalAccounts}</p>
                    <p>Active Accounts: {report.reportSummary.activeAccounts}</p>
                    <h3>Credit Accounts</h3>
                    {report.creditAccounts.map((account, index) => (
                        <div key={index}>
                            <p>Credit Card: {account.creditCard}</p>
                            <p>Bank: {account.bank}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading report...</p>
            )}
        </div>
    );
}

export default Report;
