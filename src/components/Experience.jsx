import { OrbitControls } from "@react-three/drei";
import { VCRPlayer } from "./VCRPlayer";
import { ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <VCRPlayer />
      </ScrollControls>
    </>
  );
};
