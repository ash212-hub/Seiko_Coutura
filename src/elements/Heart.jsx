import { Outlines } from '@react-three/drei';
import React, { useRef, useMemo,useState } from 'react'; 
import { Shape, ExtrudeGeometry } from 'three'; 

function HeartShape() {
  const meshRef = useRef();
  const [color, setColor] =useState(false);
  // Create the heart shape
  const shape = useMemo(() => {
    const heartShape = new Shape();
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
    return heartShape;
  }, []);

  // Create geometry
  const geometry = useMemo(() => 
    new ExtrudeGeometry(shape, { depth: 10, bevelEnabled: true, bevelThickness: 1, bevelSize: 1, bevelSegments: 5 }), 
    [shape]
  );

 

  return (
    <mesh ref={meshRef} geometry={geometry} scale={0.004} position={[0, -2, 0]} rotation-x={Math.PI}  onClick={()=>{
        setColor(!color)
    }} >
      <meshStandardMaterial color={color?"#880808":"white"} />
      <Outlines thickness={3} color="black" />
 
    </mesh>
  );
}

export default HeartShape;