import { Canvas } from '@react-three/fiber'
import {   ContactShadows  , Environment, OrbitControls, ScrollControls, Stage,  } from '@react-three/drei'
import Modelhandle from './components/Modelhandle' 
 import sickimg from './assets/seiko.png'
import Accordion from './elements/Accordian.jsx'
import { useState } from 'react'
export default function App() {
 const[show, setShow] = useState(true)
 const [end,setEnd]=useState(true)
 const handleClick = () => {
    setShow(!show)
  }
  const handleClick2 = () => {
    setShow(!show)
    alert('your payment link is sent to your email')
    setEnd(!end)
  }
  const handleClick3 = () => {
    setEnd(true)
    setShow(true)
  }
  return (
    <div className='w-full flex relative items-center justify-center h-screen border-2 border-black'>
       <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 ,near:1,far:1000}} >
      <ambientLight intensity={20} />
      <Environment preset="city" />
      <OrbitControls
  enableZoom={false}
  enablePan={false}
  enableDamping={true}
  dampingFactor={0.2}
  rotateSpeed={0.3}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 3}
  minAzimuthAngle={-Math.PI / 6} // -45 degrees
  maxAzimuthAngle={Math.PI / 6}  // +45 degrees
/>
       <directionalLight position={[0, 10, 0]} intensity={1} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />  
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
      <ScrollControls
      damping={0.5}
      pages={6}>
       
       
          <Modelhandle handleClick={handleClick}  />
     
       
      </ScrollControls> 
      <ContactShadows position={[0, -1.4, 0]} opacity={0.95} scale={10} blur={1} far={2} />
      
    </Canvas>
    <div className={`w-[80%] h-[80%] ${show ? 'hidden' : 'flex'}  gap-6  mt-9   absolute flex items-center justify-center flex-col-reverse sm:flex-row md:flex-row lg:flex-row bg-white/20 backdrop-blur-sm rounded-xl`}>
       
     <div className="box1 w-full h-full flex items-center gap-3 justify-start flex-col my-auto  rounded-xl text-center ">
        <div className='w-full h-auto p-2  bg-gray-300 rounded-md'>
        <h1 className='text-2xl font-bold'>Seiko Men's SSG009</h1>
        <p className='text-sm text-gray-700 hidden sm:inline md:inline ld:inline'> The Seiko Men's SSG009 is a stylish and functional timepiece. It features a radio sync solar chronograph that automatically adjusts time and calendar settings. The watch is powered by light energy, eliminating the need for battery changes. With a world time function covering 25 time zones, it’s perfect for frequent travelers</p>
        </div>
 
      

      <Accordion />








        <div className='w-full  p-2 bg-gray-300 rounded-md'>
            <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300" type="button" onClick={handleClick2}>
            
           
              Place Order
           </button>
        </div>

     </div>
     <div className="box2 w-[50%] h-[80%]  m-auto rounded-xl flex items-center justify-center ">
       <img src={sickimg} className="max-w-full h-auto bg-yellow scale-125 sm:scale-150 md:scale-100 lg:scale-100" alt="" />
     </div>
 
     </div>
     <div className={`w-full h-full flex-col gap-4 ${end ? 'hidden' : 'flex'} flex items-center justify-center absolute top-0 left-0 bg-black/60`}>
       <h1 className='text-2xl font-bold text-white'>Thanks for Choosing </h1>
       <h1 className='text-2xl font-bold text-white'>Seiko Coutura </h1>
       <div>
        <button className='w-auto h-auto p-2 bg-gray-300 rounded-md' type="button" onClick={handleClick3}>
          back
        </button>
       </div>
      
     </div>
    </div>
  )
}
 
 