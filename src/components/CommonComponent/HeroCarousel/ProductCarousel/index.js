import React, { useState } from "react";
import styles from "../ProductCarousel/ProductCarousel.module.scss"; // Import SCSS module

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const slides = [
    "Crop 1",
    "Crop 2",
    "Crop 3",
    "Crop 4",
    "Crop 5",
    "Crop 6",
    "Crop 7",
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDeltaX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (deltaX < -50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length); // Move next
    } else if (deltaX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length); // Move prev
    }

    setDeltaX(0);
  };

  const getClassName = (index) => {
    if (index === currentIndex) return styles.active;
    if (index === (currentIndex - 1 + slides.length) % slides.length)
      return styles.prev;
    if (index === (currentIndex + 1) % slides.length) return styles.next;
    return styles.hidden;
  };

  return (
    <>
      <div className={`${styles.titleWrapper} mb-20`}>
      <h2 className="mt-50">Quality Products</h2>
      <p className={styles.intro}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      </div>
      <div
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles["carousel-slide"]} ${getClassName(index)}`}
          >
            {slide}
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
