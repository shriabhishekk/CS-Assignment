# Credit Pull XML Processing - MERN Stack Project

## Project Overview
This is a MERN stack project that allows users to upload an XML file, parse its data, store it in a MongoDB database, and display the retrieved data on a React frontend. The project consists of:
- A **backend** (Node.js, Express, MongoDB) to handle file uploads and data storage.
- A **frontend** (React.js) to display the stored data.
- **Postman** is used to test API endpoints.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Tools**: Postman, MongoDB Compass
- **File Handling**: Multer (for file uploads)
- **XML Parsing**: xml2js

---

## How to Set Up Locally
### Prerequisites
Ensure you have the following installed:
- Node.js and npm
- MongoDB (installed locally or using a cloud service like MongoDB Atlas)
- Git
- Postman (for API testing)

### Clone the Repository
```bash
git clone https://github.com/shriabhishekk/CS-Assignment
```

### Setup Backend
1. Navigate to the **backend** folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
node server.js
```
The backend should now be running at `http://localhost:5000`.

### Setup Frontend
1. Navigate to the **my-app** folder:
```bash
cd ../my-app
```
2. Install dependencies:
```bash
npm install
```
3. Start the frontend server:
```bash
npm start
```
The frontend should now be running at `http://localhost:3000`.

---

## How to Test APIs Using Postman
1. **Upload an XML File**:
   - Open Postman.
   - Set method to **POST**.
   - Enter URL: `http://localhost:5000/upload`
   - Go to the **Body** section → Select **form-data**.
   - Add a key **file** (type: **File**), and upload an XML file.
   - Click **Send**.
   - If successful, you will see a response confirming the data is saved.

2. **View Stored Data**:
   - Use **GET** request to `http://localhost:5000/api/reports` to retrieve stored data.
   - The response should contain parsed XML data from MongoDB.

---

## Viewing Data in MongoDB Compass
1. Open **MongoDB Compass**.
2. Connect to `mongodb://localhost:27017/your_database_name`.
3. Find the **collection** where the XML data is stored.
4. You should see the parsed data stored as documents.

---

## Notes
- Ensure MongoDB is running before starting the backend.
- If using MongoDB Atlas, replace the `MONGO_URI` in `.env` with the Atlas connection string.
- The parsed XML files are stored in the `/uploads` folder in the backend.

---

## Running Both Frontend & Backend Simultaneously
Use the following command in the project root directory:
```bash
concurrently "cd backend && npm start" "cd frontend && npm start"
```
This will run both servers at the same time.

---

## Conclusion
Now, the project is fully set up and running on your local machine. You can upload XML files via Postman, view the parsed data in MongoDB, and display the information on the frontend.
