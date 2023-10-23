import React, { useState } from 'react';
import './Pop_up.css';
import data from './data.json';
import contact from './contact.jpg';

function Popup({ onClose, imageId }) {
  
  let myarray = imageId.split("-");
  const type = myarray[0];
  const num = Number(myarray[1]);
  console.log(data[type][num-1]["video-status"]);


  return (
    <div className="blur" >
      <div className="box" onMouseLeave={onClose}>
        <div className="content" >
          {/* Close button */}
          <div className="close" onClick={onClose}>
            <p>X</p>
          </div>

          {/* Video */}
          <div className="video-container">

            {data[type][num-1]["img-status"] && <iframe class='video' src={data[type][num-1]["event-image"]}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>}

            {!data[type][num-1]["img-status"] && 

              <img class='img' src={data[type][num-1]["event-image"]}  />
              
            }

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
