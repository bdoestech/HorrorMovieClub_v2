import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel>
        <Canvas
          camera={{ position: [1, 1.5, 7], fov: 17 }}
          style={{ height: "100vh", width: "100vw" }}
        >
          <Experience />
        </Canvas>
      </TabPanel>
      <TabPanel>
        <h1 style={{ color: "white" }}>Hello</h1>
      </TabPanel>
    </Tabs>
  );
}

export default App;
