import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    // Camera position damping
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // Rotation damping - now works for both mobile and desktop
    easing.dampE(
      groupRef.current.rotation,
      [
        -state.pointer.y / (isMobile ? 3 : 2), // Vertical rotation
        -state.pointer.x / (isMobile ? 5 : 3), // Horizontal rotation
        0
      ],
      0.25,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;