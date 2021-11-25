import React from 'react'
import img from "../Images/Logo.png"
import "./testing1.css"
import ReactPlayer from "react-player";


function Testing1(props) {
    return (
        <div className="testing1">
            <div className="lines">
                <h1 className="first">Wanna do coding together</h1>
                <h3 className="second">Get started here</h3>
            </div>
            <div className="video_player_1">
            <ReactPlayer
  url='https:/youtu.be/1rTaNzjGOek'
  playing
  muted
  config={{ file: { attributes: {
    autoPlay: true,
    muted: true
  }}}}
/>
<div className="video_player_2">
<ReactPlayer
  url='https://youtu.be/S8yn3-WpVV8'
  playing
  muted
  config={{ file: { attributes: {
    autoPlay: true,
    muted: true
  }}}}
/>
</div>
            </div>
            
        </div>
    )
}

export default Testing1


