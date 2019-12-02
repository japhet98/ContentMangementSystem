import React, { Component } from 'react';
import pic1 from '../../../../res/images/ashesi1.jpg'
import pic2 from '../../../../res/images/ashesi1.jpg'
import pic3 from '../../../../res/images/ashesi2.jpg'
import pic4 from '../../../../res/images/ashesi3.jpg'
import pic5 from '../../../../res/images/ashesi4.jpg'
import pic6 from '../../../../res/images/ashesi5.jpg'

import pic7 from '../../../../res/images/ashesi6.jpg'
import pic8 from '../../../../res/images/ashesi1b.jpg'
import pic9 from '../../../../res/images/about4.jpg'
import pic10 from '../../../../res/images/ashesi8.jpg'
import Carousel from 'react-bootstrap/Carousel'

class CarouselPage extends Component {
    render() {
        return (
            <div>
                <div>
        <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic6}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic8}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic9}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic10}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic7}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> 
            </div>
        );
    }
}

export default CarouselPage;
