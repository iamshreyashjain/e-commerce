import './App.css';
import HP_Header from './Components/HP_Header/HP_Header';
import HP_Footer from './Components/HP_Footer/HP_Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { storage } from './context/firebase'; // Ensure the path is correct
import { v4 as uuidv4 } from 'uuid';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

function App() {
  const [txt, settxt] = useState('');
  const [imageURLs, setImageURLs] = useState([]);

  const handleOnUpload = async (e) => {
    const files = e.target.files;
    if (!files) return;

    const uploadPromises = Array.from(files).map(async (file) => {
      const storageRef = ref(storage, `Imgs/${uuidv4()}`);
      const snapshot = await uploadBytes(storageRef, file);
      return getDownloadURL(snapshot.ref);
    });

    try {
      const urls = await Promise.all(uploadPromises);
      setImageURLs((prevURLs) => [...prevURLs, ...urls]);
      console.log('Files available at', urls);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <>
      <HP_Header />
      <input type="text" value={txt} onChange={(e) => settxt(e.target.value)} />
      <input type="file" multiple onChange={handleOnUpload} />
      <div className="image-gallery">
        {imageURLs.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
      <Outlet />
      <HP_Footer />
    </>
  );
}

export default App;
