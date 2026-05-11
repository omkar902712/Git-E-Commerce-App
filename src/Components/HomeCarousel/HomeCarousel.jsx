import React, { useEffect, useState } from "react";
import "./HomeCarousel.css";

// import slider1 from "../../assets/Slider1.jpg";
import slider1 from "../../assets/Images/Header/Slider1.jpg";
import slider2 from "../../assets/Images/Header/Slider2.jpg";
import slider3 from "../../assets/Images/Header/Slider3.jpg";
import slider4 from "../../assets/Images/Header/Slider4.jpg";
import slider5 from "../../assets/Images/Header/Slider5.jpg";
import slider6 from "../../assets/Images/Header/Slider6.jpg";

const HomeCarousel = () => { 

  const images = [slider1, slider2, slider3, slider4, slider5, slider6];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);

  }, [current]);

  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }

  };

  return (
    <div className="carousel">

      <img
        src={images[current]}
        alt="slider"
        className="carousel-image"
      />

      {/* Previous Button */}
      <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>

      {/* Next Button */}
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>

      <div className="dots">

        {images.map((item, index) => (

          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </div>
  );
};

export default HomeCarousel;