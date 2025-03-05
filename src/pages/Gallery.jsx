import { useState, useEffect } from 'react';
// import './Gallery.css';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = [
      '/images/1.jpg',
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/pexels-steve-9874642.webp ',
      '/images/pexels-steve-9874642.webp ',
      '/images/image4.webp  ',
      '/images/image4.webp  ',
      '/images/image5.webp ',
      '/images/2.jpg',
      '/images/image5.webp ',

      '/images/social-media-logos-transparent-psd-file (1).webp ',
      '/images/social-media-logos-transparent-psd-file (1).webp ',

    ];
    const shuffledImages = [...imagePaths].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">הגלריה שלנו</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="gallery-item" />
        ))}
      </div>
    </div>
  );
};

export default Gallery ;

