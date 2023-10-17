import React, { Component } from 'react';

class MiniEvents extends Component {
    
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
        if (w <= 500) this.setState({ maxSlides: 5 });
        else if (w <= 1000) this.setState({ maxSlides: 2 });
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
            <div className="carousel-container-mini">
                <button className="slider-button-mini left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-mini">
                    <img id="mini-1" onClick={this.handleImageClick} src="https://via.placeholder.com/210/FFCCCB?text=A"/>
                    <img id="mini-2" onClick={this.handleImageClick} src="https://via.placeholder.com/220/FFCCCB?text=B"/>
                    <img id="mini-3" onClick={this.handleImageClick} src="https://via.placeholder.com/230/FFCCCB?text=C"/>
                    <img id="mini-4" onClick={this.handleImageClick} src="https://via.placeholder.com/240/FFCCCB?text=D"/>
                    <img id="mini-5" onClick={this.handleImageClick} src="https://via.placeholder.com/250/FFCCCB?text=E"/>
                    <img id="mini-6" onClick={this.handleImageClick} src="https://via.placeholder.com/260/FFCCCB?text=F"/>
                </div>
                <button className="slider-button-mini right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default MiniEvents;