import React, { forwardRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const DELAY_SHOW = 0;

export const CentralObject = forwardRef(
  ({ children, position = [0, 0, 0], rotation = [0, 0, 0] }, ref) => {
    const [visible, setVisible] = useState(false);

    useGSAP(() => {
      setTimeout(() => {
        setVisible(true);
      }, DELAY_SHOW);

      if (!ref.current || !visible) return;

      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();

      box.getCenter(center);
      ref.current.position.set(-center.x, -center.y, -center.z);

      gsap
        .timeline()
        .from(ref.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: gsap.utils.random(0.5, 1.5),
          delay: gsap.utils.random(0, 0.5),
          ease: 'elastic.out(1,0.3)',
        })

        .from(
          ref.current.rotation,
          {
            y: -0.5,
            duration: 1,
            ease: 'elastic.out(1,0.4)',
          },
          0,
        );
    }, [ref, visible]);

    return (
      <group ref={ref} visible={visible} position={position} rotation={rotation}>
        {children}
      </group>
    );
  },
);

CentralObject.displayName = 'CentralObject';

// Revolving Object Component
export const RevolvingObject = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  radius = 1.8,
  speed = 0.01,
  angle: initialAngle = 0,
  offset = [0, 0, 0],
  centralObjectRef,
  children,
}) => {
  const ref = React.useRef();
  const angleRef = React.useRef(initialAngle);
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    if (!centralObjectRef.current || !ref?.current || !visible) return;

    ref.current.position.set(
      ...calculateXYZ({
        angleRef,
        position: [
          centralObjectRef.current.position.x,
          centralObjectRef.current.position.y,
          centralObjectRef.current.position.z,
        ],
        offset,
        radius,
        speed,
      }),
    );
  });

  useGSAP(() => {
    setTimeout(() => {
      setVisible(true);
    }, DELAY_SHOW);

    if (!ref?.current || !visible) return;

    gsap.from(ref.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: gsap.utils.random(0.5, 1.5),
      delay: gsap.utils.random(0, 0.5),
      ease: 'elastic.out(1,0.3)',
    });
  }, [ref, visible]);

  return (
    <group ref={ref} position={position} rotation={rotation} visible={visible}>
      {children}
    </group>
  );
};

RevolvingObject.displayName = 'RevolvingObject';

const calculateXYZ = ({
  angleRef,
  centralPosition: [currentX, currentY] = [0, 0, 0],
  offset: [offsetX, offsetY, offsetZ] = [0, 0, 0],
  radius,
  speed,
}) => {
  angleRef.current -= speed;

  const x = currentX + radius * Math.cos(angleRef.current);
  const z = currentY + radius * Math.sin(angleRef.current);

  // tilt slant on Y and Z
  const y = radius * Math.sin(angleRef.current) * Math.sin(Math.PI / 10);
  const slantedZ = z * Math.cos(Math.PI / 10);

  return [x + offsetX, y + offsetY, slantedZ + offsetZ];
};
