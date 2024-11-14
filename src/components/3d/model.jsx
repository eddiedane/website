import { useGLTF } from '@react-three/drei';
import { forwardRef } from 'react';

const Model = forwardRef(({ src, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }, ref) => {
  const { scene } = useGLTF(src);

  return (
    <primitive ref={ref} object={scene} scale={scale} position={position} rotation={rotation} />
  );
});

Model.displayName = 'Model';

export default Model;
