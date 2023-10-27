import React, { Component } from 'react';
import Popup from './Popup';
class WorkShops extends Component {
    
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
            <div className="carousel-container-work">
                <button className="slider-button-work left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-work">
                  <img className='event-image' id="workshops-1" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=15bWCJgXHwMNP_C41c-r7fHC7-Qhk7PBA"/>
                  <img className='event-image' id="workshops-2" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1j_w0R9fg5T6pX4ulQS99cYpPHKufc-S0"/>
                  <img className='event-image' id="workshops-3" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1_Jy5YLOUYlmoytdDaVkY3nxHF-7Wgs8L"/>
                  <img className='event-image' id="workshops-4" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1lK-hbM3dxiajihxtWbcU_0QDfOLrX6bl"/>
                  <img className='event-image' id="workshops-1" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1Oqs2jS3zAD8TG471Vs67PAECfKTff-G9"/>
                  <img className='event-image' id="workshops-5" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                </div>
                <button className="slider-button-work right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>

                {isOpen && (<Popup onClose={this.closePopup} imageId={clickedImageId} class="drop_down" ></Popup>)}
            </div>
        );
    }
}

export default WorkShops;