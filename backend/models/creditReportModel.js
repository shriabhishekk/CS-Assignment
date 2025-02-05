const mongoose = require('mongoose');

const creditReportSchema = new mongoose.Schema({
    name: String,
    mobilePhone: String,
    pan: String,
    creditScore: Number,
    reportSummary: {
        totalAccounts: Number,
        activeAccounts: Number,
        closedAccounts: Number,
        currentBalance: Number,
        securedAccounts: Number,
        unsecuredAccounts: Number,
        last7DaysCreditEnquiries: Number
    },
    creditAccounts: [
        {
            creditCard: String,
            bank: String,
            address: String,
            accountNumber: String,
            overdueAmount: Number,
            currentBalance: Number
        }
    ]
});

const CreditReport = mongoose.model('CreditReport', creditReportSchema);
module.exports = CreditReport;
