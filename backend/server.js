const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const xml2js = require('xml2js');
const fs = require('fs');
const cors = require('cors');
const CreditReport = require('./models/creditReportModel');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@clusterr.peywk.mongodb.net/creditReports?retryWrites=true&w=majority&appName=Clusterr
', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const filePath = path.join(__dirname, 'uploads', req.file.filename);

  try {
    const xmlData = fs.readFileSync(filePath, 'utf8'); 

    
    xml2js.parseString(xmlData, { explicitArray: false }, async (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return res.status(500).send('Error parsing XML');
      }

      console.log('Parsed XML Result:', JSON.stringify(result, null, 2));

      const reportData = {
        name: result.creditReport.basicDetails.name,
        mobilePhone: result.creditReport.basicDetails.mobilePhone,
        pan: result.creditReport.basicDetails.pan,
        creditScore: result.creditReport.basicDetails.creditScore,
        reportSummary: {
          totalAccounts: result.creditReport.reportSummary.totalAccounts,
          activeAccounts: result.creditReport.reportSummary.activeAccounts,
          closedAccounts: result.creditReport.reportSummary.closedAccounts,
          currentBalance: result.creditReport.reportSummary.currentBalance,
          securedAccounts: result.creditReport.reportSummary.securedAccounts,
          unsecuredAccounts: result.creditReport.reportSummary.unsecuredAccounts,
          last7DaysCreditEnquiries: result.creditReport.reportSummary.last7DaysEnquiries,
        },
        creditAccounts: result.creditReport.creditAccounts?.creditCard || [],
        addresses: result.creditReport.addresses?.address || [],
      };

    
      const newReport = new CreditReport(reportData);

      try {
        await newReport.save();
        res.status(200).send('File uploaded and data saved successfully');
      } catch (saveErr) {
        console.error('Error saving to MongoDB:', saveErr);
        res.status(500).send('Error saving to MongoDB');
      }
    });
  } catch (fileReadErr) {
    console.error('Error reading file:', fileReadErr);
    res.status(500).send('Error reading file');
  }
});


app.get('/api/reports', async (req, res) => {
    try {
      const reports = await CreditReport.find();  
      res.json(reports);  
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from database');
    }
  });
  


const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
