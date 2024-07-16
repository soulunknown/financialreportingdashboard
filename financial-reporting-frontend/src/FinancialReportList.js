import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialReportList = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5039/api/financialreports')
            .then(response => {
                setReports(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the financial reports!', error);
            });
    }, []);

    return (
        <div>
            <h1>Financial Reports</h1>
            <ul>
                {reports.map(report => (
                    <li key={report.id}>{report.reportName} - ${report.amount} on {new Date(report.reportDate).toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default FinancialReportList;
