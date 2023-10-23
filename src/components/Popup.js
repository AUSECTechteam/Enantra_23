import React, { useState } from 'react';
import './Pop_up.css';
import data from './data.json';
import contact from './contact.jpg';

function Popup({ onClose, imageId }) {
  
  let myarray = imageId.split("-");
  const type = myarray[0];
  const num = Number(myarray[1]);
  let data_present = true;
  if( data[type][num-1] )
    console.log(imageId);
  else
  {  
    console.log("It is not present");
    data_present = false;
  }

  return (
    data_present && (  <div className="blur" >
      <div className="box" >
        <div className="content" >
          {/* Close button onMouseLeave={onClose}*/}
          <div className="close" onClick={onClose}>
            <p>X</p>
          </div>

          {/* Video */}
          <div className="video-container">

            {data[type][num-1]["img-status"] && <iframe class='video' src={data[type][num-1]["event-image"]}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
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

            {/* Contact button 
            <a href={data[type][num-1]["contact-number"][0]} target="_blank">
              <button class="glow-button2" type="button" value="More info">
                <div class="button_text">
                  More info
                </div>
              </button>
            </a>
            */}

          </div>

          <div class="About_info">
            <h4 className='EventName'>{data[type][num-1]["event-name"]}</h4>
            <p>{data[type][num-1]["about-event"]}</p>  
          </div>


          <div class="Details">
            <h4 className='EventName'>Details</h4>
            <p>Date: {data[type][num-1]["event-date"]}</p>
            <p>Time: {data[type][num-1]["start-time"]}</p>
            <p>Venue: {data[type][num-1]["event-location"]}</p>
            <p>Cost: &#8377; {data[type][num-1]["event-fee"]}</p>
          </div>

          <div class="contact_info">
            <h4 className='EventName'>Contact Us</h4>
            <div class="contact_box">
              <p className='contact-us' >{data[type][num-1]['contact-name'][0]}</p>
              <p className='contact-one'>+91 {data[type][num-1]['contact-number'][0]}</p>
            </div>
            
            <div class="contact_box">
              <p className='contact-us'>{data[type][num-1]['contact-name'][1]}</p>
              <p className='contact-one'>+91 {data[type][num-1]['contact-number'][1]}</p>
            </div>  
            
          </div>

          

          

          

     </div>

        

      </div>
    </div>)
  );
}

export default Popup;
