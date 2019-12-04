import React, { Component } from 'react';
import CarouselPage from './homeContent/carousel';
import JumbrotumPage from './homeContent/jumbrotum';
import Team from './homeContent/Team';
import YouTubePage from './homeContent/video';

class Homepage extends Component {
    render() {
        return (
            <div>
              
             { /* Carousel */}
             <CarouselPage/>
             {/*Jumbrotum */}
             <JumbrotumPage/>
             {/* Video */}
             <YouTubePage/>
             {/* <Team/> */}
             {/*Our goal and vision */}
            </div>
        );
    }
}

export default Homepage;