import React, { useState } from 'react';
import MegaEvents from './components/MegaEvents';
import MiniEvents from './components/MiniEvents';
import WorkShops from './components/Workshops';
import './App.css';
import './slides.css';

function App() {

  const [isVideoMuted, setIsVideoMuted] = useState(true); // Primary mute button
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // To play the video on mouse movements
  const [isSlideVideoMuted, setIsSlideVideoMuted] = useState(true); // To play the slide video on mouse movements

  // Function to pause the video while scrolling through the events
  const toggleSlideMute = () => {
    setIsSlideVideoMuted(!isSlideVideoMuted);
  };

  // Function to pause the video while scrolling through the events
  const toggleVideoPlaying = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Function to mute and unmute the video
  const toggleMute = () => {
    setIsVideoMuted(!isVideoMuted);
    setIsVideoPlaying(true);
  };

  // Function to play the video once the mouse moves
  const toggleVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    
    <div>
      <div className="body">
        {/* Menu or Navigation Bar */}
        <div className="navbar" onMouseEnter={toggleVideo}>
          <a href="">
            <img
              className="logo"
              src="https://drive.google.com/uc?export=view&id=1_oq4l8QMlKmNihexLrWxW0-5Rfwp8wwU"
              alt="Logo"
            />
          </a>
          <a href="#home" className="space">
            Home
          </a>
          
          <a href="https://linktr.ee/ausec.official" className="space">
            Contact Us
          </a>
        </div>

        {/*  Promo Video Container */}
        <div className="container">
          
          {/*  Investiture Promotional Video */}
          <video className="Investiture1" preload="auto" muted={isVideoMuted}  autoPlay={isVideoPlaying} loop >
            <source
              src="https://drive.google.com/uc?export=download&id=1gEvm_Zkf1VukB3kB1WPRvQQN4-mZynR-"
              type="video/mp4"
            />
          </video>
          
          {/*  Enantra Logo */}
          <img id="overlay-image" className="imgg" src="https://drive.google.com/uc?export=view&id=1AvmcdE3ltY3LTX449WJVqhUzt_-G0uK3"/>

          {/*  Enantra Gist */}
          <div className="overlay-text">
            <p>Enantra is an AU courant entrepreneurship event aimed at envisioning<br/>
            and empowering the youth with the spirit of entrepreneurship and the art<br/>
            of corporate play.
            </p>
          </div>

          {/*  Instagram and AUSEC official page links */}
          <div className="hello">
            <a href="https://www.instagram.com/_ausec_/" target="_blank">
              <button className="glow-button" type="button" value="insta" >
                <div className="button_text">
                  <img className="icn_size sizing"  src="https://drive.google.com/uc?export=view&id=1z-QVBlmroXCFrleAeEby-RVadcL79W7M"/>
                  <span class="content">Instagram</span>
                  </div>
              </button> 
            </a>
            <a href="https://auced.com/ausec/" target="_blank">
              <button className="glow-button2" type="button" value="More info">
                <div className="button_text">
                  <img className="icn_size sizing"  src="https://drive.google.com/uc?export=view&id=1nO_DPHSyUVRezuACV5k01tIx02TmHZDa"/>
                  More info
                </div>
              </button>
            </a>
          </div> 

          {/*Unmute button*/} 
          <button className="volume_button" id="unmute-button" onClick={toggleMute} >
            <img 
            className={`img_icn volume ${isVideoMuted ? 'muted' : ''}`} 
            id="speaker-icon"  
            src={!isVideoMuted ? 'https://drive.google.com/uc?export=view&id=1tGY1TLhfWO2rCReC1b9o8cFSTFnLRusc' : 'https://drive.google.com/uc?export=view&id=18s8rMz84keNue9BYu2pyln2l6HqdPpca'}
            />
          </button>

          {/*Events box*/}
          <div class="Events_container">
            <p className='event-text'>Mega Events</p>
            <MegaEvents/><br/>
            <p className='event-text'>Mini Events</p>
            <MiniEvents/><br/>
            <p className='event-text'>Workshops</p>
            <WorkShops/>
          </div>

          {/* Gradient to blend in the video */}
          <div className="trans-slideshow"></div>
          
          {/* Container to display Events */}
          <div className="Events-box" onMouseEnter={toggleVideoPlaying} onMouseLeave={toggleVideoPlaying} >
          </div>
        </div>
      </div>

      {/*Pop Up message to rotate the screen*/}
      <div class="popup">
        <div class="popup-content">
          <h2>Please Rotate Your Device</h2>
          <p>This website is best viewed in landscape mode.</p>
          <img src="rotate.png" class="rt"/>
        </div>
      </div>
    </div>
      
  );
}

export default App;