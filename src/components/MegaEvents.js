import React, { Component } from 'react';

class MegaEvents extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          slideNum: 0,
          maxSlides: 9,
        };
        this.sliderRef = React.createRef();
      }
    
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
      const clickedImageId = event.target.id;
      console.log(`Clicked image ID: ${clickedImageId}`);
    }

    render() {
        return(
            <div className="carousel-container-mega">
                <button className="slider-button-mega left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-mega">
                    <img id="mega-1" onClick={this.handleImageClick} src="https://via.placeholder.com/210/FFCCCB?text=A"/>
                    <img id="mega-2" onClick={this.handleImageClick} src="https://via.placeholder.com/220/FFCCCB?text=B"/>
                    <img id="mega-3" onClick={this.handleImageClick} src="https://via.placeholder.com/230/FFCCCB?text=C"/>
                    <img id="mega-4" onClick={this.handleImageClick} src="https://via.placeholder.com/240/FFCCCB?text=D"/>
                </div>
                <button className="slider-button-mega right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default MegaEvents;