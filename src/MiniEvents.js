import React, { Component } from 'react';
import Popup from './Popup';
class MiniEvents extends Component {
    
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
            <div className="carousel-container-mini">
                <button className="slider-button-mini left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-mini">
                    <img className='event-image'  id="mini-1" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1fvsCNkZEtgSE6BQgMRnVve5JKWnyUKoj"/>
                    <img className='event-image'  id="mini-2" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1p5KGAwsym6z08d1NMCARn-Q7AZkqfHwJ"/>
                    <img className='event-image'  id="mini-3" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1oW1ZJBsYtUsgk8SOz0TpQHndyPGMoe83"/>
                    <img className='event-image'  id="mini-4" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1UWyDmV6uanhhGBN8MpJ3bMAesuGdcW4G"/>
                    <img className='event-image'  id="mini-5" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1HL16msExYXGJ9uiIHP1p11PW0EFY-Ify"/>
                    <img className='event-image'  id="mini-6" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1dCFv0H8o2OY7O1jiy3sTfLglN-zfs8I1"/>
                </div>
                <button className="slider-button-mini right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>

                {isOpen && (<Popup onClose={this.closePopup} imageId={clickedImageId} class="drop_down" ></Popup>)}
            </div>
        );
    }
}

export default MiniEvents;