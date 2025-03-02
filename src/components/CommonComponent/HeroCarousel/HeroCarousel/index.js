import React, { useState } from "react";
import styles from "./HeroCarousel.module.scss"; // Import SCSS module

const images = [
  { id: 1, src: "/images/farm1.jpg", alt: "Farm Field" },
  { id: 2, src: "/images/farm2.jpg", alt: "Green Crops" },
  { id: 3, src: "/images/farm3.jpg", alt: "Sunset Over Farm" },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.heroCarousel}>
      <div className={styles.titleWrapper}>
        <h3>From tentwenty</h3>
        <h1 className={styles.title}>From our farms to your hands</h1>

      </div>
      {/* "Next" Button with Background of Next Slide */}
      <div className={styles.nextThumbnail} onClick={nextSlide}>
        <span>Next</span>
        <div className={`${styles.cornerLine} ${styles.topRight}`}></div>
        <div className={`${styles.cornerLine} ${styles.bottomLeft}`}></div>
        <img
          // src={images[(activeIndex + 1) % images.length].src}
          src={require("/public/images/rice-field.jpg")}
          alt="Next Slide Preview"
          className={styles.nextPreview}
        />
      </div>

      {/* Main Image Section */}
      <div className={styles.mainImage}>
        <img 
          src={require("/public/images/rice-field.jpg")}
        // src={images[activeIndex].src}
         alt={images[activeIndex].alt} />
      </div>
    </div>
  );
};

export default HeroCarousel;
