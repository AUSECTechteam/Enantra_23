import React, { Component } from 'react';
import Popup from './Popup';
class MegaEvents extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          clickedImageId: "",
          isOpen: false,
          slideNum: 0,
          maxSlides: 9,
        };
        this.sliderRef = React.createRef();
      }

      closePopup = () => {
        this.setState({ isOpen: false });
      };
    
      componentDidMount() {
        this.getMaxSlides();
        window.addEventListener('resize', this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }
    
      handleResize = () => {
        this.setState({ slideNum: 0 });
        this.getMaxSlides();
      };
    
      getMaxSlides() {
        const w = window.innerWidth;
        if (w <= 500) this.setState({ maxSlides: 1 });
        else if (w <= 1000) this.setState({ maxSlides: 1 });
        else this.setState({ maxSlides: 1 });
      }
    
      moveRight() {
        this.getMaxSlides();
        const { slideNum, maxSlides } = this.state;
        let newSlideNum = slideNum;
        if (newSlideNum >= maxSlides) {
          newSlideNum = -1;
        }
        newSlideNum+=1;
        this.setState({ slideNum: newSlideNum });
        this.sliderRef.current.style.transform = `translateX(-${newSlideNum * 100}%)`;
      }
    
      moveLeft() {
        this.getMaxSlides();
        const { slideNum, maxSlides } = this.state;
        let newSlideNum = slideNum;
        if (newSlideNum == -1 | newSlideNum == 0) {
          newSlideNum = maxSlides + 1;
        }
        newSlideNum-=1;
        this.setState({ slideNum: newSlideNum });
        this.sliderRef.current.style.transform = `translateX(-${newSlideNum * 100}%)`;
      }

    handleResize = () => {
        this.setState({ slideNum: -1 });
        this.moveRight();
        this.moveLeft();
        this.getMaxSlides();
    };

    handleImageClick = (event) => {
      
      this.setState
      ({ 
        isOpen: true,
        clickedImageId: event.target.id,
       });

      console.log(`Clicked image ID: ${event.target.id}`);
      
    }

    render() {
      const { clickedImageId,isOpen } = this.state;
        return(

            <div className="carousel-container-mega">
                <button className="slider-button-mega left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-mega">
                  <img className='event-image' id="mega-5" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1zK6PIci5SWObLznqcCf79G3SdkwoB0hx"/>
                  <img className='event-image' id="mega-4" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1Dl7n2T26dfcG7eLIML3_NzEFjhSRD22B"/>
                  <img className='event-image' id="mega-2" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=10u14qWafWh27MiDv6Ah2EZGyEHQadEUO"/>
                  <img className='event-image' id="mega-3" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1FlH64tN7GDziQ2n7bBkilnly2eguZDRH"/>
                  <img className='event-image' id="mega-1" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1hPilv053uWK_gaQrNOmKwpfi6qfOz_L_"/>
                  <img className='event-image' id="mega-5" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1zK6PIci5SWObLznqcCf79G3SdkwoB0hx"/>
                </div>
                <button className="slider-button-mega right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
                {isOpen && (<Popup onClose={this.closePopup} imageId={clickedImageId} class="drop_down" ></Popup>)}
            </div>

        );
    }
}

export default MegaEvents;