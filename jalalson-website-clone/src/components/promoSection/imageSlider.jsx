import React, { useEffect, useState } from "react";
import promo1 from "../../assets/promotionpics/promo1.webp";
import promo2 from "../../assets/promotionpics/promo2.webp";
import promo3 from "../../assets/promotionpics/promo3.webp";
import promo4 from "../../assets/promotionpics/promo4.webp";
import promo5 from "../../assets/promotionpics/promo5.webp";
import promo6 from "../../assets/promotionpics/promo6.webp";
import promo7 from "../../assets/promotionpics/promo7.webp";
import promo8 from "../../assets/promotionpics/promo8.webp";
import promo9 from "../../assets/promotionpics/promo9.webp";
import promo10 from "../../assets/promotionpics/promo10.webp";

const ImageSlider = () => {
  const images = [
    promo1,
    promo2,
    promo3,
    promo4,
    promo5,
    promo6,
    promo7,
    promo8,
    promo9,
    promo10,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <img
        src={images[index]}
        alt="promotion"
        className="w-full h-full object-cover transition-opacity duration-3000"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div className="pt-2 pb-2" onClick={() => setIndex(i)} key={i}
          ><button
          key={i}
            
            className={`h-0.5 w-6 ${i === index ? "bg-white" : "bg-gray-600/50"}`}
          /></div>
          
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
