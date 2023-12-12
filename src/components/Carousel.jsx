import React, { useState } from "react";
import "./Carousel.css";

import Button from "./Button";

// complete the function below:
function Carousel(props) {
  const [count, setCount] = useState(0);

  // Function to change the images based on the side("operation") by changing the "count"
  const handleClick = (operation) => {
    operation === "left"
      ? count != 0
        ? setCount((prevCount) => prevCount - 1)
        : setCount((prevCount) => (prevCount = props.images.length - 1))
      : count != props.images.length - 1
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => (prevCount = 0));
  };

  return (
    <div id="carousel">
      <div
        id="innerCarousel"
        style={{ backgroundImage: `url(${props.images[count].img})` }}
      >
        <Button side="left" handleClick={handleClick} />

        <div id="centerText">
          <h1>{props.images[count].title}</h1>
          <p>{props.images[count].subtitle}</p>
        </div>

        <Button side="right" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Carousel;