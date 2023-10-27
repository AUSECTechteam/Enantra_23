import React, { Component } from 'react';

// const url = {
//   "1" : "https://google.com/",
//   "2" : "",
//   "3" : "",
//   "4" : "",
//   "5" : "",
//   "6" : "",
//   "7" : ""
// }

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
        if (w <= 500) this.setState({ maxSlides: 1 }); // 2
        else if (w <= 1000) this.setState({ maxSlides: 1 }); // 2
        else this.setState({ maxSlides: 1 }); // 2 for 3 slides
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

    handleClick = (id) => {
      window.open("https://unstop.com/p/6dt-6-degree-talks-enantra-80-anna-university-au-chennai-805384", '_blank');
    };

    render() {
        return(
            <div className="carousel-container-six">
                <button className="slider-button-six left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider-six">
                    <img className='event-image'  id="six-1" onClick={() => this.handleClick()} src="https://drive.google.com/uc?export=view&id=1zqmQCJSzveYfunRST6o1xW-1jTN1SzAj"/>
                    <img className='event-image'  id="six-2" onClick={() => this.handleClick()} src="https://drive.google.com/uc?export=view&id=1FVDaDSZkQWmeQ840ccumWqFg0Kr1L-3J"/>
                    <img className='event-image'  id="six-3" onClick={() => this.handleClick()} src="https://drive.google.com/uc?export=view&id=1Oj2dVqLZlhkCSflDv-hbP3Sd_EjNxS24"/>
                    <img className='event-image'  id="six-4" onClick={() => this.handleClick()} src="https://drive.google.com/uc?export=view&id=1R1_OzX7B39flIvfvf95j1pe_qrstDfc9"/>
                    <img className='event-image'  id="six-5" onClick={() => this.handleClick()} src="https://drive.google.com/uc?export=view&id=1O5ZQ2KZypdz3fzcALLOVDaJPBX0FcQrI"/>
                    <img className='event-image'  id="six-6" onClick={() => this.handleClick()} src="https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/>
                    {/* <img className='event-image'  id="six-7" onClick={() => this.handleClick(7)} src="https://drive.google.com/uc?export=view&id=https://fakeimg.pl/700x400/000000/c7b018?text=STAY+TUNED!&font=museo"/> */}
                </div>
                <button className="slider-button-six right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default SixDegree;