import React, { Component } from 'react';

class SixDegree extends Component {
    
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
        if (w <= 500) this.setState({ maxSlides: 2 });
        else if (w <= 1000) this.setState({ maxSlides: 2 });
        else this.setState({ maxSlides: 2 });
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
            <div className="carousel-container-six">
                <button className="slider-button-six left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-six">
                    <img className='event-image'  id="six-1" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-2" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-3" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-4" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-5" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-6" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    <img className='event-image'  id="six-7" onClick={this.handleImageClick} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                </div>
                <button className="slider-button-six right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default SixDegree;