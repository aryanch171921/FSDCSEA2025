import React, { useState } from 'react';

const ImageManipulation = () => {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [bgColor, setBgColor] = useState("rgb(25, 255, 255)");
  const [imgRotate, setImgRotate] = useState(0);

  const increaseHeight = () => setCatHeight(prev => prev + 20);
  const decreaseHeight = () => setCatHeight(prev => Math.max(prev - 20, 20));
  const increaseWidth = () => setCatWidth(prev => prev + 20);
  const decreaseWidth = () => setCatWidth(prev => Math.max(prev - 20, 20));

  const makeRed = () => setBgColor("rgb(255, 0, 0)");
  const makeBlue = () => setBgColor("rgb(0, 0, 255)");
  const makeGreen = () => setBgColor("rgb(0, 255, 0)");

  const rotateLeft = () => setImgRotate(prev => prev - 15);
  const rotateRight = () => setImgRotate(prev => prev + 15);

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          margin: "20px",
          textAlign: "center",
          backgroundColor: bgColor,
        }}
      >
        <img
          style={{
            width: `${catWidth}px`,
            height: `${catHeight}px`,
            transform: `rotate(${imgRotate}deg)`,
            transition: "all 0.3s ease",
          }}
          src="https://tse3.mm.bing.net/th/id/OIP.g1m0K7yumfwkc_ub224a4AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Cat"
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight}>Decrease Height</button>
        <button onClick={increaseWidth}>Increase Width</button>
        <button onClick={decreaseWidth}>Decrease Width</button>
        <button onClick={makeRed}>Red</button>
        <button onClick={makeGreen}>Green</button>
        <button onClick={makeBlue}>Blue</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </>
  );
};

export default ImageManipulation;
