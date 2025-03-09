import React, { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";

import StateCard from "../OtherPredictors/StateCard";

import logo1 from "./Assets/apgov.png";
import logo2 from "./Assets/KAGov.png";
import logo3 from "./Assets/MHGov.png";
import logo4 from "./Assets/WBJEE.svg";
import logo5 from "./Assets/TSGov.svg";
import logo6 from "./Assets/JEE.png";

const logoCards = [
  { color: "#01A650", exam: "EAPCET", state: "Andhra Pradesh", logo: logo1 },
  { color: "black", exam: "JEE Main", state: "India", logo: logo6 },
  { color: "#9F2042", exam: "TS-EMCET", state: "Telengana", logo: logo5 },
  { color: "#901D78", exam: "KCET", state: "Karnataka", logo: logo2 },
  { color: "#163269", exam: "MHCET", state: "Maharastra", logo: logo3 },
  { color: "#ED6533", exam: "WBJEE", state: "West Bengal", logo: logo4 },
  { color: "#ED6533", exam: "DSAT", state: "International", logo: logo1 },
];

const LogoInfinite = () => {
  const [sliderWidth, setSliderWidth] = useState("100px");

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setSliderWidth("340px"); // lg screens
      } else if (window.innerWidth >= 600) {
        setSliderWidth("320px"); // lg screens
      } else {
        setSliderWidth("200px"); // sm screens
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Listen to window resize

    return () => window.removeEventListener("resize", updateWidth); // Cleanup listener
  }, []);

  return (
    <article className="slider w-full p-6 bg-white mt-4 mb-4 flex flex-col justify-start items-start gap-0 md:gap-6">
      <p className="titile pl-[4%] text-[21px] md:text-[32px]">
        Try Ours&nbsp;{" "}
        <span className="font-bold text-secondary">Exclusive</span>&nbsp;
        Predictors :
      </p>
      <Slider
        width={sliderWidth}
        duration={30}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor="#FFFFFF"
      >
        {logoCards.map((card, index) => (
          <Slider.Slide key={index}>
            <StateCard
              color={card.color}
              exam={card.exam}
              state={card.state}
              logo={card.logo}
            />
          </Slider.Slide>
        ))}
      </Slider>
    </article>
  );
};

export default LogoInfinite;
