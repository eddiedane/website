'use client';

import { useEffect, useRef, useState } from 'react';
import { ContactShadows, Environment, Float, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { cn } from '@/lib/utils';
import { CentralObject, RevolvingObject } from '@/components/revolving-object';
import Model from '@/components/model';

export default function Orbit({ className = '' }) {
  const centralObjectRef = useRef();
  const defaultShadowColor =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? '#ffffff'
      : '#000000';
  const [shadowColor, setShadowColor] = useState(defaultShadowColor);

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        if (event.matches) {
          setShadowColor('#ffffff');
        } else {
          setShadowColor('#000000');
        }
      });
  }, []);

  return (
    <Canvas
      className={cn('z-0', className)}
      shadows
      gl={{ antialias: true }}
      camera={{ position: [65.5, 6.5, 25], fov: 4, near: 1, far: 200 }}
      id='orbit-canvas'
    >
      <ambientLight />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.65}
        scale={40}
        blur={1}
        far={9}
        color={shadowColor}
      />
      <CentralObject ref={centralObjectRef} rotation={[0, Math.PI * 1.9, 0]}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Model src='/3d/html5-logo/scene.gltf' scale={0.25} />
        </Float>
      </CentralObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        centralObjectRef={centralObjectRef}
        rotation={[0, Math.PI / 3, 0]}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Model src='/3d/python-logo/scene.gltf' scale={0.15} />
        </Float>
      </RevolvingObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        offsetX={-0.5}
        offsetY={-0.25}
        rotation={[0, Math.PI / 2, 0]}
        centralObjectRef={centralObjectRef}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Text3D
            font='/3d/fonts/CousineRegular.json' // Font path
            size={0.5} // Font size
            height={0.05} // Depth of the text
            bevelEnabled // Enable beveling for a more 3D effect
            bevelSize={0.01} // Size of the bevel
            bevelThickness={0.01} // Thickness of the bevel
            curveSegments={12} // Number of curve segments (for smoother text)
          >
            {'[]'}
            <meshStandardMaterial
              attach='material'
              color={0x999999}
              metalness={1}
              roughness={0.2}
            />
          </Text3D>
        </Float>
      </RevolvingObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        centralObjectRef={centralObjectRef}
        position={[0, 0, 0]}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2} rotation={[0, -0.3, 0]}>
          <Model src='/3d/gopher/scene.gltf' scale={0.5} />
        </Float>
      </RevolvingObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        centralObjectRef={centralObjectRef}
        position={[0, 0, 0]}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2} rotation={[0, Math.PI / 3, 0]}>
          <Model src='/3d/react-logo/scene.gltf' scale={0.12} />
        </Float>
      </RevolvingObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        offsetX={-0.5}
        offsetY={-0.25}
        centralObjectRef={centralObjectRef}
      >
        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 3, 0]}
        >
          <Text3D
            font='/3d/fonts/CousineRegular.json' // Font path
            size={0.4} // Font size
            height={0.05} // Depth of the text
            bevelEnabled // Enable beveling for a more 3D effect
            bevelSize={0.01} // Size of the bevel
            bevelThickness={0.01} // Thickness of the bevel
            curveSegments={12} // Number of curve segments (for smoother text)
          >
            {'</>'}
            <meshStandardMaterial attach='material' color='yellow' metalness={1} roughness={0.2} />
          </Text3D>
        </Float>
      </RevolvingObject>
      <RevolvingObject angle={angleStep(n(), 7)} centralObjectRef={centralObjectRef}>
        <Float speed={2} rotationIntensity={4} floatIntensity={3}>
          <Model src='/3d/docker-whale/scene.gltf' scale={0.2} rotation={[0, Math.PI * 0.5, 0]} />
        </Float>
      </RevolvingObject>
      <RevolvingObject
        angle={angleStep(n(), 7)}
        offsetX={-0.5}
        offsetY={-0.25}
        centralObjectRef={centralObjectRef}
        position={[0, 0, 0]}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2} rotation={[0, Math.PI / 3, 0]}>
          <Text3D
            font='/3d/fonts/CousineRegular.json' // Font path
            size={0.5} // Font size
            height={0.05} // Depth of the text
            bevelEnabled // Enable beveling for a more 3D effect
            bevelSize={0.01} // Size of the bevel
            bevelThickness={0.01} // Thickness of the bevel
            curveSegments={12} // Number of curve segments (for smoother text)
          >
            {'{}'}
            <meshNormalMaterial attach='material' />
          </Text3D>
        </Float>
      </RevolvingObject>

      <Environment preset='sunset' />
    </Canvas>
  );
}

const angleStep = (index, itemCount) => {
  return index * ((Math.PI * 2) / itemCount);
};

const n = () => {
  n.n = n.n || 0;
  return n.n++;
};
