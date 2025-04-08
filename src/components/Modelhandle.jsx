import React, { useRef,useLayoutEffect }  from 'react'
import { PresentationControls ,Center, Stage,useScroll} from '@react-three/drei' 
import { Watch } from '../elements/Watch'
import Typo from './Typo' 
 import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import {  useThree } from '@react-three/fiber'
 
function Modelhandle({handleClick}) {
    const scroll  = useScroll()
    const watchref=useRef();
    const timeline=useRef();
    const logoref=useRef();
    const subheado=useRef();
    const specifications=useRef();
    const functref=useRef();
    const caseref=useRef();
    const endref=useRef();
    const scrolup=useRef();
    const margin=0.5;
    const {width, height} = useThree((state) => state.viewport)
     
    useLayoutEffect(() => { 
          //  logo animation starting
          timeline.current = gsap.timeline();
          timeline.current.from(logoref.current.position, { y: -2, duration: 1 },1);
          timeline.current.to(logoref.current.scale, { x: 2, y: 2, z: 2, duration: 1 },1);
          timeline.current.to(logoref.current.position, { z: -width,y:height*0.7-margin, duration: 1 });
          timeline.current.to(logoref.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 0.5 },2);
           
          // watch starting animation
          timeline.current.from(watchref.current.position, { y: -height, duration: 1 },1);
          timeline.current.to(watchref.current.position, { y: -height/3, duration: 1 },1);
          timeline.current.to(watchref.current.rotation, { y: Math.PI*2, duration: 1 },1);
          // subheado animation
          timeline.current.from(subheado.current.position, { y: -2.5,X:-0.5,z:0, duration: 1 },2.6);
          timeline.current.to(watchref.current.position, { x: 1, duration: 1 },2.1);
          timeline.current.to(subheado.current.position, { y: height, duration: 1 },3.2);

          // specifications animation
          timeline.current.from(specifications.current.position, { y: -2.5,X:-0.5,z:0, duration: 1 },3.5);
          timeline.current.to(specifications.current.position, { y: height, duration: 1 },3.5);
          timeline.current.to(watchref.current.position, { x: -1, duration: 1},3);
          timeline.current.to(watchref.current.rotation, { y: Math.PI*4.2 , duration: 1 },3);
        
          // Functuons animation
          timeline.current.from(functref.current.position,{y:-2.5,duration:1},4.6)
          timeline.current.to(watchref.current.position, { x: 1, duration: 1},4);
          timeline.current.to(watchref.current.rotation, { y: Math.PI*1.8 , duration: 1 },4);
     
          // caseref aniation
          timeline.current.from(caseref.current.position,{y:-2.5,duration:1},5.5)
          timeline.current.to(watchref.current.position, { x: -1.28,y:-0.6, duration: 1},5);
          timeline.current.to(watchref.current.rotation, { z: Math.PI/2,y:Math.PI , duration: 1 },5);
          // end animations
          timeline.current.to(watchref.current.position, { x: -1.28,y:0.2, duration: 1},6);
          timeline.current.to(endref.current.position,{y:-1.0,duration:1},5.5)
         
        // scroll up animation
        timeline.current.to(scrolup.current.position,{y:2.5,duration:1},0.2) 
        timeline.current.to(scrolup.current.scale,{x:1,y:1,duration:1},0.2)
        
        }, [scroll]);
    

      useFrame(() => { 
            timeline.current.seek(scroll.offset*timeline.current.duration())
           })

  return (
    <>
          
    
                
                  <mesh visible={ true}>
                    <Watch watchref={watchref} />
                  </mesh>
               
             
              <Typo
           logoref={logoref}
           subheado={subheado}
           specifications={specifications}
           functref={functref}
           caseref={caseref}
           endref={endref}
            scrolup={scrolup}
            handleClick={handleClick}
           />
    </>
  )
}

export default Modelhandle