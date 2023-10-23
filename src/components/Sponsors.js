import React, { Component } from 'react';

class Sponsor extends Component {
    
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
            <div className="carousel-container-spon">
                <button className="slider-button-spon left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-spon">
                    <img className='event-image'  id="spon-1" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=12DIWtAK7mt9DalTPY6npC_hMdIGbutTp"/>
                    <img className='event-image'  id="spon-2" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1Zb1XBu-byFW1-LNd2fK290cTz1JjrmPD"/>
                    <img className='event-image'  id="spon-3" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1wxlvPda2qkxFwRELaxQHoVwFZaWadrV-"/>
                    <img className='event-image'  id="spon-4" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1vkvDRlaYrCEyuSnqnhTfxj3lnWoc5Hwg"/>
                    <img className='event-image'  id="spon-5" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1nZi7XYrNGDjG87GDgvH0YSRz7c2ZR3xr"/>
                    <img className='event-image'  id="spon-6" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1TqF2ABqxW3EYY4LeNYRZWNPfuHSsxjR3"/>
                    <img className='event-image'  id="spon-7" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1CtyKIzOdb3BfJfNhVM-kWITLd2jUxkRf"/>
                    <img className='event-image'  id="spon-8" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=14RHXNmBIXq3nACY-QNdBvL3eHiupCJmj"/>
                    <img className='event-image'  id="spon-9" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=10eeh07N1of3h1vWivC4S9_hwLkRg6WML"/>
                    <img className='event-image'  id="spon-10" onClick={this.handleImageClick} src="https://drive.google.com/uc?export=view&id=1VVbwrI7ilSciFL7VMCzOi_7PmtDuARn2"/>
                </div>
                <button className="slider-button-spon right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default Sponsor;