import { Billboard, Center, Text } from '@react-three/drei'
import React, { useState }  from 'react'  
import HeartShape from '../elements/Heart'
import { useThree } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'
function Typo({logoref,subheado,specifications,functref,caseref,endref,handleClick,scrolup}) {
 const {width, height} = useThree((state) => state.viewport)

     
       
    const [color, setColor] = useState('black');
  return (
    <>
     <mesh>
     <group position={[0,0,0]} scale={1} ref={logoref}>
        <Center position-x={0.5} scale={1}>
          <Billboard
          lockX={true}
          lockY={true}
          lockZ={true}
          follow={false}
          rotateX={false}
          rotateY={false}
          rotateZ={false}
          >
            <Text   children="SEIKO" textAlign='center' color="black" fontSize={1}  font='/font/GlyphaLTStd.woff' />
            <Text   children="since 1881" textAlign='center' color="black" fontSize={0.4} position-y={-0.5}  lineHeight={0}  font='/font/GlyphaLTStd.ttf'  />
          </Billboard>
        </Center>
     </group>
        <group  scale={1} ref={subheado} position={[-0.7,height,0]}>
          <Text children="men's" fontSize={0.3} fontWeight={200} color="black" position={[0,0,0]} />
          <Text children="SSG009" fontSize={0.4} fontWeight={600} letterSpacing={0.3} fontStyle='bold' color="black" position-y={-0.4}  />
          <Text children="Coutura" fontSize={0.2} fontWeight={200} letterSpacing={0} fontStyle='bold' color="black" position-y={-0.75}  />
          <Text children="USD $595.00" fontSize={0.22} fontWeight={200} letterSpacing={0} fontStyle='bold' color="black" position-y={-1.1}  />
          <mesh position={[0,-0.4,0]} scale={0.5}>
            
            <mesh position={[-0.4,-0.37,0]} scale={0.8} >
              <HeartShape />
            </mesh>
            <Text children="Favorite" fontSize={0.22} fontWeight={200} letterSpacing={0} fontStyle='bold' color="black" position={[0.4,-2.1,0]}  />
           </mesh>
        </group>
        <group position={[0,-1,0]} scale={0.8} ref={scrolup}>
          <Text children="scroll up  " fontSize={0.28} fontWeight={400} letterSpacing={0} fontStyle='bold' color="black" position={[0.05,0,0]} textAlign='center'   />
          <Text children=">" fontSize={1.5} fontWeight={400} letterSpacing={0} fontStyle='bold' color="black" position={[0,0.6,0]} rotation={[0,0,degToRad(90)]} textAlign='center'   />
        </group>

        <group position={[width*0.15,height,0]} scale={[0.8,0.8,1]} ref={specifications}>
  <Text children="Specifications" fontSize={0.28} fontWeight={400} letterSpacing={0} fontStyle='bold' color="black" position={[0,0,0]} textAlign='left' />
  <Text children="Caliber Number: 8B92" fontSize={0.15} fontWeight={200} color="black" position={[0,-0.35,0]} textAlign='left' />
  <Text children="Type: Radio Sync Solar" fontSize={0.15} fontWeight={200} color="black" position={[0,-0.7,0]} textAlign='left' />
  <Text children="Precision: ±15 seconds/month (5°C-35°C)" fontSize={0.15} fontWeight={200} color="black" position={[0,-1.05,0]} textAlign='left' />
  <Text children="Power Reserve: Approx. 6 months (fully charged)" fontSize={0.15} fontWeight={200} color="black" position={[0,-1.4,0]} textAlign='left' />
  <Text children="Power save: 2 years" fontSize={0.15} fontWeight={200} color="black" position={[0,-1.75,0]} textAlign='left' />
  <Text children="Jewels: 10" fontSize={0.15} fontWeight={200} color="black" position={[0,-2.1,0]} textAlign='left' />
</group>
<group  position={[-width*0.15,height,0]} scale={[0.8,0.6,1]} ref={functref}>
  <Text children="Functions" fontSize={0.28} fontWeight={600} color="black" position={[0,0.3,0]} textAlign='left' />
  <Text children="Overcharge Prevention" fontSize={0.15} fontWeight={200} color="black" position={[0, 0, 0]} textAlign='left' />
  <Text children="Quick-Start" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.3, 0]} textAlign='left' />
  <Text children="Power Save" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.6, 0]} textAlign='left' />
  <Text children="24-Hour Hand" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.9, 0]} textAlign='left' />
  <Text children="Chronograph: Up to 60 minutes in 1/5 second increments" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.2, 0]} textAlign='left' />
  <Text children="Full-Auto Calendar: Correct to December 31, 2099" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.5, 0]} textAlign='left' />
  <Text children="World Time: 25 time zones" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.8, 0]} textAlign='left' />
  <Text children="Radio Signal Receiving: Japan, China, U.S.A., Germany, U.K." fontSize={0.15} fontWeight={200} color="black" position={[0, -2.1, 0]} textAlign='left' />
  <Text children="Automatic & Manual Reception" fontSize={0.15} fontWeight={200} color="black" position={[0, -2.4, 0]} textAlign='left' />
  <Text children="Reception Result Display" fontSize={0.15} fontWeight={200} color="black" position={[0, -2.7, 0]} textAlign='left' />
  <Text children="Automatic Hand Position Alignment" fontSize={0.15} fontWeight={200} color="black" position={[0, -3, 0]} textAlign='left' />
  <Text children="Date Display" fontSize={0.15} fontWeight={200} color="black" position={[0, -3.3, 0]} textAlign='left' />
  <Text children="Case/Band:" fontSize={0.15} fontWeight={200} color="black" position={[0, -3.6, 0]} textAlign='left' />
</group>
   
<group  position={[width*0.15,height,0]} scale={[0.8,0.8,1]} ref={caseref} >
  <Text children="Case/Band" fontSize={0.28} fontWeight={600} color="black" position={[0, 0, 0]} textAlign='left' />
  <Text children="Case Material: Stainless Steel" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.3, 0]} textAlign='left' />
  <Text children="Case Size: Thickness:11.5mm, Diameter:45.3mm" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.6, 0]} textAlign='left' />
  <Text children="Crystal: Sapphire Crystal" fontSize={0.15} fontWeight={200} color="black" position={[0, -0.9, 0]} textAlign='left' />
  <Text children="LumiBrite: LumiBrite on hands and index(es)" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.2, 0]} textAlign='left' />
  <Text children="Clasp: Three-fold clasp with push button release" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.5, 0]} textAlign='left' />
  <Text children="Distance between lugs: 12" fontSize={0.15} fontWeight={200} color="black" position={[0, -1.8, 0]} textAlign='left' />
</group>
<group position={[0,-5,0]} scale={[0.8,0.6,1]} ref={endref} visible={true} onPointerEnter={
  () => setColor('red')
} onPointerLeave={
  () => setColor('black')
}>
  

<Text children="Order Now" fontSize={0.28} fontWeight={600} color={color} position={[0, 0, 0]} textAlign='left' onClick={handleClick} />
</group>
      
     </mesh>
    </>
  )
}

export default Typo