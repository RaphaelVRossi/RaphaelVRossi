import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.scss';

interface CarouselProps {
  components: any[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ components, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use useCallback to memoize goToNextSlide
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  }, [components.length]); // Dependency: images.length because it's used inside

  // Use useCallback to memoize goToPrevSlide (good practice, even if not directly in useEffect)
  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  }, [components.length]); // Dependency: images.length

  // Automatic slide transition
  useEffect(() => {
    if (interval > 0) {
      const timer = setInterval(() => {
        goToNextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }); // Add goToNextSlide to the dependency array


  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {components.map((component: any, index: number) => (
          <div className="carousel-slide" key={index}>
            {component}
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={goToNextSlide}>
        &#10095;
      </button>

      <div className="carousel-dots">
        {components.map((_: any, index: number) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
