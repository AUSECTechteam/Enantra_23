import React, { useState } from 'react';
import './Pop_up.css';
import data from './data.json';
import contact from './contact.jpg';

function Popup({ onClose, imageId }) {
  
  let myarray = imageId.split("-");
  const type = myarray[0];
  const num = Number(myarray[1]);
  let data_present = true; //to check wether if we have event details
  let event = true; // to check wether if the event is GenZ Bazzar
  let team = false;
  let individual = false;
  
  
  if( data[type][num-1] )
  {
    
    //to participate as a team
    if (type === "mini" )
      team = true;
    else
      individual = true;

    //to not have the button to buy tickets
    if (data[type][num - 1]["event-name"] === "GenZ Bazaar")
    {  
      event = false;
      individual = false;
    }

    if (data[type][num - 1]["event-name"] === "Auction House")
    {  
      team = true;
      individual = false;
    }

    if (data[type][num - 1]["event-name"] === "Idea Crunch")
    {
      team = false;
      individual = false;
    } 

    
    if (data[type][num - 1]["event-name"] === "Hackathon")
    {
      team = true;
      individual = false;
    } 
    
    console.log(imageId);
  }  
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
            { event &&
            <a href={data[type][num-1]["reg-link"]} 
            target="_blank">
              <button class="glow-button" type="button" value="insta">
                <div class="button_text">
                Buy Tickets
                </div>
              </button>
            </a>}
            {!data[type][num-1]["img-status"] &&<div class="Translate"></div>}
          </div>

          <div class="About_info">
            <h4 className='EventName'>{data[type][num-1]["event-name"]}</h4>
            <p>{data[type][num-1]["about-event"]}</p>  
          </div>


          <div class="Details">
            <h4 className='EventName'>Details</h4>
            <p><span className='Details_span'>Date:</span> {data[type][num-1]["event-date"]}</p>
            <p><span className='Details_span'>Time:</span> {data[type][num-1]["start-time"]}</p>
            <p><span className='Details_span'>Venue:</span> {data[type][num-1]["event-location"]}</p>
            {team && (imageId!="mega-1") && <p><span className='Details_span'>Cost per team:</span> &#8377; {data[type][num-1]["event-fee"]}</p>}
            {individual && <p><span className='Details_span'>Cost per individual:</span> &#8377; {data[type][num-1]["event-fee"]}</p>}
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
