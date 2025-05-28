import { useState, useEffect } from 'react';
import './Carousel.scss';

interface CarouselProps {
  components: any[];
  interval?: number;
}

function Carousel({ components, interval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (interval > 0) {
      const timer = setInterval(() => {
        goToNextSlide();
      }, interval)
      return () => clearInterval(timer);
    }
  })

  const carouselSlide = () => {
    return (
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {
          components.map((component: any, index: number) => (
            <div className="carousel-slide" key={`component-${index}`}>
              {component}
            </div>
          ))
        }
      </div>
    )
  }

  const carouselDots = () => {
    return (
      <div className="carousel-dots">
        {
          components.map((_: any, index: number) => (
            <span
              key={`dot-${index}`}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))
        }
      </div>
    )
  }

  return (
    <div className="carousel-container">
      {carouselSlide()}
      <button className="carousel-button prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={goToNextSlide}>
        &#10095;
      </button>
      {carouselDots()}
    </div>
  );
};

export default Carousel;
