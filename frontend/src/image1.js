// I have separated the code into two components: one for uploading and the other for displaying images.

// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/images');
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', selectedFile);

    try {
      await axios.post('http://localhost:5000/api/upload', formData);
      setTitle('');
      setDescription('');
      setSelectedFile(null);
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input type="file" onChange={handleFileChange} />
        <br />
        <button type="submit">Upload</button>
      </form>

      <div>
        {images.map((image, index) => {
          if (image.img && image.img.data && image.img.data.data) {
            return (
              <div key={index}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <img 
                  src={`data:${image.img.contentType};base64,${arrayBufferToBase64(image.img.data.data)}`}
                  alt={image.title}
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;