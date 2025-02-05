const CreditReport = require('../models/creditReportModel');

const saveCreditReport = async (parsedData) => {
  try {
    const creditReport = new CreditReport(parsedData);
    await creditReport.save();
    console.log("Data saved successfully to MongoDB");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
  }
};

module.exports = { saveCreditReport };
