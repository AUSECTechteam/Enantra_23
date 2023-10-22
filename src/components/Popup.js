import React, { useState } from 'react';
import './Pop_up.css';

function Popup({ onClose, imageId }) {
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const toggleMute = () => {
    const video = document.querySelector('video');
    video.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  return (
    <div className="blur" onClick={onClose}>
      <div className="box">
        <div className="content">
          {/* Close button */}
          <div className="close" onClick={onClose} >
            <p>X</p>
          </div>

          {/* Video */}
          <div className="video-container">
            <video>
              <source
                src="https://drive.google.com/uc?export=download&id=1gEvm_Zkf1VukB3kB1WPRvQQN4-mZynR-"
                type="video/mp4"
              />
            </video>

            <img class="Event_tittle" src="https://drive.google.com/uc?export=view&id=1AvmcdE3ltY3LTX449WJVqhUzt_-G0uK3"></img>

            <div class="Translate">
              {/* Register button */}
              <a href="https://www.instagram.com/_ausec_/" target="_blank">
                <button class="glow-button" type="button" value="insta">
                  <div class="button_text">
                    Register
                  </div>
                </button>
              </a>

              {/* Contact button */}
              <a href="https://auced.com/ausec/" target="_blank">
                <button class="glow-button2" type="button" value="More info">
                  <div class="button_text">
                    Contact
                  </div>
                </button>
              </a>

              {/* Contact button */}
              <a href="https://auced.com/ausec/" target="_blank">
                <button class="glow-button2" type="button" value="More info">
                  <div class="button_text">
                    Contact
                  </div>
                </button>
              </a>
            </div>

            {/* Mute button */}
            <button
              className="volume_button"
              id="unmute-button"
              onClick={toggleMute}
            >
              <img
                className={`img_icn volume ${isVideoMuted ? 'muted' : ''}`}
                id="speaker-icon"
                src={
                  isVideoMuted
                    ? 'https://drive.google.com/uc?export=view&id=18s8rMz84keNue9BYu2pyln2l6HqdPpca'
                    : 'https://drive.google.com/uc?export=view&id=1tGY1TLhfWO2rCReC1b9o8cFSTFnLRusc'
                }
              />
            </button>
          </div>

          <div class="About_info">
            <h4>
            {imageId}:
            </h4>
            please fill in the abput event details
          </div>

          <div class="Details">
            <p>Date:9.05.2023</p>
            <p>Date:9.05.2023</p>
            <p>Date:9.05.2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
