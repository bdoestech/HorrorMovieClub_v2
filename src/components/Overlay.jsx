import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

import SciFiButton from "./Button";

const Section = (props) => {
  return (
    <section
      style={{
        paddingLeft: "500px",
        opacity: 1,
        height: "100vh", // Full viewport height for spacing
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        ...props.style, // Apply dynamic styles
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        {props.children}
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  //   const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    // setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <Section style={{ opacity: opacityFirstSection }}>
        <h1>Hello, I'm Darayus</h1>
        <p>Butts</p>
        <p>My fav movies</p>
        <ul>
          <li>Hereditary</li>
          <li>Hellraiser</li>
          <li>Midsommar</li>
        </ul>
        <p>↓</p>

        <SciFiButton
          onClick={() =>
            document
              .getElementById("section2")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Jump to Brendan
        </SciFiButton>
      </Section>
      <Section id="section2" style={{ opacity: opacitySecondSection }}>
        <h1>Hello, I'm Brendan</h1>
        <p>Butts</p>
        <p>I know:</p>
        <ul>
          <li>Hereditary</li>
          <li>Hellraiser</li>
          <li>Midsommar</li>
        </ul>
        <p>↓</p>
      </Section>
    </Scroll>
  );
};
