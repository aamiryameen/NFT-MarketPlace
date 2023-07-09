
import React, { useState, useEffect } from 'react';
import '../Components/AdminDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Galaxical Space');
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  
  const navigate = useNavigate();
  const fetchImages = async () => {
    let isloggedin = await localStorage.getItem('isloggedin');
    if(isloggedin == null)
    {
      navigate('/login');
      return false;
    }
    try {
        // you need to change with backend api
      const res = await axios.get('https://api.democryppunkss.com/api/images');
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
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('selectedFile', selectedFile);
      formData.append('price', price);
      formData.append('category', category);
      console.log(category, formData);


      // you need to change with backend api
      await axios.post('https://api.democryppunkss.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    
      setTitle('');
      setDescription('');
      setSelectedFile(null);
      setPrice('');
      setCategory('Galaxical Space');
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };



  // OLD CODE

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   formData.append('image', selectedFile);
  //   formData.append('price', price);
  //   formData.append('category', category);


  //   try {
  //     await axios.post('http://localhost:5000/api/upload', formData);
      
  //     setTitle('');
  //     setDescription('');
  //     setSelectedFile(null);
  //     fetchImages();
  //     setPrice('');
  //     setCategory('');

  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
    <div>

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
        <label htmlFor="price">Eth Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <label htmlFor='category'>Category:</label>
          <select id='category' value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value='Galaxical Space'>Galaxical Space</option>
            <option value='UFO'>UFO</option>
            <option value='Animation'>Animation</option>
            <option value='Coins'>Coins</option>
          </select>
        <br />
        
        <input type="file" onChange={handleFileChange} />

        <button type="submit">Upload</button>
      </form>

    </div>
    </div>
  )
}


export default AdminDashboard;