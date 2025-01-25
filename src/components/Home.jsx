import React from "react";
import "../App.css";

const Home = () => {
  return (
    // <div>
    <div
      style={{
        position: "relative",
        height: "90vh", // Maintains the 16:9 aspect ratio (9/16 = 0.5625)
        width: "100%", // Full height of the viewport
        margin: "0 auto", // Centers the div horizontally
        overflow: "hidden", // Ensures no overflow from the iframe
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5ftmr17M-a4?si=RYKX6yRaW4BGmhC2&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style={{
          position: "absolute", // Stretches to fill the parent container
          top: 0,
          left: 0,
          width: "100%", // Fills the width of the parent
          height: "100%", // Fills the height of the parent
        }}
      ></iframe>{" "}
    </div>
    // </div>
  );
};

export default Home;
