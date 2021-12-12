import React, { useEffect, useState } from 'react'
import "../Styling/testing1.css"
import vid3 from "../Videos/pexels-sora-shimazaki-5925291.mp4"
import vid1 from "../Videos/pexels-mikhail-nilov-6963744.mp4"
import vid2 from "../Videos/Matrix, Console, Hacking, Code.mp4"
import {motion} from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css';

function Testing1(props) {
  useEffect(()=>{
    Aos.init({
      duration:2000});

  },[]);

  return (
    <div className="testing1">
      

        <div className="videos">
          
      
  <video  data-aos="flip-left" className="video_player_1" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        
        
        
        
        
<video   data-aos="flip-up" className="video_player_2" autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>




<video   data-aos="flip-right" className="video_player_3" autoPlay loop muted>
          <source src={vid3} type="video/mp4" />
        </video>

          
          
        </div>
        </div>
)
}
export default Testing1

