
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../App.css"; // Assuming your CSS file is named RoadMap.css

const RoadMap = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animateTitle && window.scrollY > 100) {
        setAnimateTitle(true);
      }
      if (!animateCards && window.scrollY > 300) {
        setAnimateCards(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateTitle, animateCards]);

  return (
    <div className="lg:w-[1512px] lg:h-[716px] text-[#FFFFFF] bg-cover bg-[url('../../images/Rectangle21.png')]">
      <div className={`w-[282px] h-[52px] relative top-[16px] left-[613px] font-shojumaru text-[44px] font-normal leading-[52.36px] text-[#ED0137] ${animateTitle ? 'fade-in' : ''}`}>
        Road Map
      </div>
      <div className="lg:w-[1159.1px] lg:h-[349px] relative top-[227px] left-[164px] flex justify-between">
        <Card image="../../images/Link1.png" animate={animateCards} />
        <Card image="../../images/Link2.png" animate={animateCards} />
        <Card image="../../images/Link3.png" animate={animateCards} />
        <Card image="../../images/Link.png" animate={animateCards} />
      </div>
    </div>
  );
};

export { RoadMap };
