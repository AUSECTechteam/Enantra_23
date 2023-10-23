import React, { useState } from 'react';
import './Pop_up.css';
import data from './data.json';
import contact from './contact.jpg';

function Popup({ onClose, imageId }) {
  const [isVideoMuted, setIsVideoMuted] = useState(false);


  const toggleMute = () => {
    const video = document.querySelector('iframe.video');
    
    video.muted = !isVideoMuted;

    setIsVideoMuted(!isVideoMuted);
  
  };

  function nothing(){
    console.log("Hello");
  }

  let myarray = imageId.split("-");
  const type = myarray[0];
  const num = Number(myarray[1]);

  console.log(myarray[0]);


  return (
    <div className="blur">
      <div className="box">
        <div className="content">
          {/* Close button */}
          <div className="close" onClick={onClose}>
            <p>X</p>
          </div>

          {/* Video */}
          <div className="video-container">
            <iframe class='video' src={data[type][num-1]["event-image"]} muted={isVideoMuted} width="950" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>

            <img class="Event_tittle" src="https://drive.google.com/uc?export=view&id=1AvmcdE3ltY3LTX449WJVqhUzt_-G0uK3"></img>

            <div class="Translate">
              {/* Register button */}
              <a href={data[type][num-1]["reg-link"]} 
              target="_blank">
                <button class="glow-button" type="button" value="insta">
                  <div class="button_text">
                  Buy Tickets
                  </div>
                </button>
              </a>

              {/* Contact button */}
              <a href={data[type][num-1]["contact-number"][0]} target="_blank">
                <button class="glow-button2" type="button" value="More info">
                  <div class="button_text">
                    More info
                  </div>
                </button>
              </a>

              {/* Contact button
              <a href={data[type][num-1]["contact-number"][1]} target="_blank">
                <button class="glow-button2" type="button" value="More info">
                  <div class="button_text">
                    Contact
                  </div>
                </button>
              </a> */}
            </div>
            
            
            {/* Mute button */}
            {data[type][num-1]["img-status"] && <button
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
            </button>}

          </div>

          <div class="About_info">
            <h4>
            {data[type][num-1]["about-event"]}
            </h4>
              
            <br></br>

            <br></br>

            
            <div className='contact-info'>
                <h2 className='about-event'>CONTACT US</h2>
                
                <p className='contact-us' >{data[type][num-1]['contact-name'][0]}</p>
                <img src={contact} className='contact-img'></img>
                <br></br>
                <p className='contact-one'>{data[type][num-1]['contact-number'][0]}</p>
                <br></br>
                <p className='contact-us'>{data[type][num-1]['contact-name'][1]}</p>
                <img src={contact} className='contact-img'></img>
                <p className='contact-two'>{data[type][num-1]['contact-number'][1]}</p>
            </div>
            
          </div>


          <div class="Details">
            <p>Date: {data[type][num-1]["event-date"]}</p>
            <p>Time: {data[type][num-1]["start-time"]}</p>
            <p>Venue: {data[type][num-1]["event-location"]}</p>
            <p>Fees: {data[type][num-1]["event-fee"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
