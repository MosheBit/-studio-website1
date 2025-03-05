import { useState, useEffect } from 'react';
import './Allgallery.css';

const Allgallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = [
      '/images/1.jpg',
  
      '/images/2.jpg',
      '/images/pexels-steve-9874642.webp ',
      '/images/pexels-steve-9874642.webp ',
      '/images/image4.webp  ',
      '/images/image4.webp  ',
      '/images/image5.webp ',
      '/images/2.jpg',
      '/images/image5.webp ',      '/images/1.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/pexels-steve-9874642.webp ',
      '/images/pexels-steve-9874642.webp ',
      '/images/image4.webp  ',
      '/images/image4.webp  ',
      '/images/image5.webp ',
      '/images/2.jpg',
      '/images/image5.webp ',
    ];
    const shuffledImages = [...imagePaths, ...imagePaths]; // שכפול התמונות
    setImages(shuffledImages);
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="gallery-title">הגלריה שלנו</h2>
      <div className="carousel" id="carousel">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="carousel-item" />
        ))}
      </div>
    </div>
  );
};

export default Allgallery;
