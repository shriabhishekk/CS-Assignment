import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('xmlFile', file);

        axios.post('http://localhost:5001/api/upload', formData)
            .then(response => {
                alert('File uploaded successfully');
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
}

export default Upload;
