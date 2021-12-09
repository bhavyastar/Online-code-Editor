import React from 'react'
import "../Styling/testing1.css"
import vid3 from "../Videos/pexels-sora-shimazaki-5925291.mp4"
import vid1 from "../Videos/pexels-mikhail-nilov-6963744.mp4"
import vid2 from "../Videos/Matrix, Console, Hacking, Code.mp4"
import {motion} from "framer-motion";

function Testing1(props) {
    return (
      <div className="testing1">
        
            <div className="videos">
            <motion.div className="vid_1_animate" 
            animate={{
              x:1100,
              scale:1.1,
              rotateX:0,
              rotateY:0
              
            }}
            initial={{
              scale:0.5,
              rotateX:200,
              rotateY:200
            }}
            transition={{
              type:"spring",
              stiffness:80,
              damping:60
              }}>
            <video  className="video_player_1" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        </motion.div>
{/* <motion.div className="vid_2_animate" 
animate={{
  x:1100,
  scale:1.5,
  rotateX:0,
  rotateY:0
}}
initial={{
  scale:0.5,
  rotateX:200,
  rotateY:200
}}
transition={{
  type:"spring",
  stiffness:80,
  damping:60
}}> 

<video  className="video_player_2" autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
</motion.div> */}
<motion.div  className="vid_3_animate"
animate={{
  x:-700,
  scale:1.1,
  rotateX:0,
  rotateY:0

}} 
initial={{
  scale:0.5,
  rotateX:200,
  rotateY:200

}}

transition={{
  type:"spring",
  stiffness:80,
  damping:100

}}>
<video  className="video_player_3" autoPlay loop muted>
          <source src={vid3} type="video/mp4" />
        </video>

          </motion.div>
        </div>
        </div>
)
}
export default Testing1

