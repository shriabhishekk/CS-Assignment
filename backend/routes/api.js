const express = require('express');
const multer = require('multer');
const xml2js = require('xml2js');
const { saveCreditReport } = require('../controllers/creditReportController'); // Import the controller

const router = express.Router();

// Multer setup for file upload (as you've already done)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

// XML upload route
router.post('/upload', upload.single('xmlFile'), (req, res) => {
    const parser = new xml2js.Parser();
    
    const xmlData = req.file.path;
    const fs = require('fs');
    fs.readFile(xmlData, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file');
        }

        parser.parseString(data, (err, result) => {
            if (err) {
                return res.status(500).send('Error parsing the XML');
            }

            // Extract data from parsed XML
            const creditReportData = extractDataFromXML(result);

            // Save the data using the controller function
            saveCreditReport(creditReportData)
                .then(() => res.status(200).json({ message: 'Data saved successfully' }))
                .catch(err => res.status(500).send('Error saving the data'));
        });
    });
});

module.exports = router;
