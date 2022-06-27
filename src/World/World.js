import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default function World() {
  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}
