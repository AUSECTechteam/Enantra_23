import React, { useState, useEffect } from 'react';
import MegaEvents from './components/MegaEvents';
import MiniEvents from './components/MiniEvents';
import WorkShops from './components/Workshops';
import SixDegree from './components/SixDegree';
import Sponsor from './components/Sponsors';
import './App.css';
import './slides.css';

function App() {


  const [isVideoMuted, setIsVideoMuted] = useState(true); // Primary mute button
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // To play the video on mouse movements
  const [isSlideVideoMuted, setIsSlideVideoMuted] = useState(true); // To play the slide video on mouse movements
  const [navbarClass, setNavbarClass] = useState('navbar'); // Navbar

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

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / (document.body.scrollHeight - windowHeight)) * 100;
      


      if (scrollPercentage >= 50) {
        // Call your function when scrolled 50% of the screen
        handleScroll50Percent();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll50Percent() {
    //console.log("Scrolled 50% of the screen");
    setNavbarClass('navbar navbar_colour');
  }
  
  return (
    
    <div>

      {/* If the body is in Landscape Mode */}
      <div className="body">
        {/* Menu or Navigation Bar  */}
        <div className={`navbar ${navbarClass}`} onMouseEnter={toggleVideo}>
          <a href="">
            <img
              className="logo"
              src="https://drive.google.com/uc?export=view&id=1eSLErNhxikRJZCHLx9R7ECvZ-kMWwDKD"
              alt="Logo"
            />
          </a>
          <a href="#home" className="space">
            Home
          </a>
          
          <a href="https://linktr.ee/ausec.official" className="space">
            Contact Us
          </a>
          <a href="" class="space" style={{float:'right'}}>
            {/*empty*/}
          </a>

          <a href=""  style={{float:'right'}}>
            <img
                className="logo"
                src="https://drive.google.com/uc?export=view&id=1_oq4l8QMlKmNihexLrWxW0-5Rfwp8wwU"
                alt="Logo"
              />
          </a>

          <a href="" style={{float:'right'}}>
            <img
                className="logo"
                src="https://drive.google.com/uc?export=view&id=1VgQf8htQPL7jZW5ly46Owcz3a06BHqnj"
                alt="Logo"
              />
          </a>

          <a href="" style={{float:'right'}}>
            <img
                className="logo"
                src="https://drive.google.com/uc?export=view&id=17-jBZ2t-z6rzS1UDwT_cDRGK3dntbFq3"
                alt="Logo"
              />
          </a>

        </div>

        {/*  Promo Video Container */}
        <div className="container">
          
          {/*  Investiture Promotional Video */}
          <video id="vidd" className="Investiture1" preload="auto" muted={isVideoMuted}  autoPlay={isVideoPlaying} loop >
            <source
              src="https://drive.google.com/uc?export=download&id=1pIckBk0m_ClWGAlwTzAYRhjXkHh-sDpv"
              type="video/mp4"
            />
          </video>
          
          {/*  Enantra Logo */}
          <img id="overlay-image" className="imgg" src="https://drive.google.com/uc?export=view&id=1NjPwTCHPmu0noch8jPxUfrjeEhdIwZW_"/>

          

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
            <a href="https://www.linkedin.com/in/anna-university-student-entrepreneurship-club-ausec/" target="_blank">
              <button className="glow-button2" type="button" value="More info">
                <div className="button_text">
                  <img className="icn_size sizing"  src="https://drive.google.com/uc?export=view&id=1DZwmI4e95q__40vjLMUwDu2PJU6EpoC9"/>
                  <span class="content">LinkedIn</span>
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
            <p className='event-text'>6DT (Six Degree Talks)</p>
            <SixDegree/><br/>
            <p className='event-text'>Mini Events</p>
            <MiniEvents/><br/>
            <p className='event-text'>Workshops</p>
            <WorkShops/><br/><br/>
            <p className='event-text'>Previous Sponsors</p>
            <Sponsor/><br/><br/>
            <div id="footer">
              <p>&copy; Enantra 2018-2023</p>
              <a href="#vidd" id="goToTop">Go to Top</a>
            </div>
          </div>

          

          {/* Gradient to blend in the video */}
          <div className="trans-slideshow"></div>
          
          {/* Container to display Events */}
          <div className="Events-box" onMouseEnter={toggleVideoPlaying} onMouseLeave={toggleVideoPlaying} >
          </div>
        </div>
      </div>

      {/*Pop Up message to rotate the screen*/}
      <div className="popup">
        <div className="popup-content">
          <h2>Please Rotate Your Device</h2>
          <p>This website is best viewed in landscape mode.</p>
          <img src="https://drive.google.com/uc?export=view&id=1dEGrS0f6deNBwcgkiBqSWqFZSV-sO9jC" className="rt"/>
        </div>
      </div>

    </div>
      
  );
}

export default App;