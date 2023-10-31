import React, { useState, useEffect, useMemo } from 'react';
import './Home.css'; // Import your CSS file for styling
import kidsImage1 from '../images/kids1.jpg'; // Import the images
import kidsImage2 from '../images/kids2.jpg';
import kidsImage3 from '../images/kids3.webp';
import kidsImage4 from '../images/kids.jpg';
import Footer from './Footer';

function Home() {
  const images = useMemo(
    () => [kidsImage1, kidsImage2, kidsImage3, kidsImage4],
    []
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [images]);

  // Split the text into an array of lines
  const textLines = [
    "In the quiet of the evening,",
    "as the sun dipped below the horizon,",
    "casting a warm orange glow across the sky,",
    "Sarah sat by the window, lost in thought.",
    "Her mind wandered through the pages of her favorite novel,",
    "each word painting vivid images in her imagination.",
    "The soft breeze rustled the curtains, and",
    "the distant chirping of crickets created a soothing symphony.",
    "It was in these moments of tranquility that she found solace,",
    "a brief escape from the hectic pace of daily life."
  ];

  return (
    <div className="home">
    <div className="home-container">
      <div className="left-slide">
        <img
          src={images[currentImageIndex]}
          alt="Children playing in the park"
          className="slide-frame"
        />
      </div>
      <div className="right-content">
        {/* Your right-side content */}
        <div className="text-container">
          {textLines.map((line, index) => (
            <div key={index} className="text-line">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Home;


