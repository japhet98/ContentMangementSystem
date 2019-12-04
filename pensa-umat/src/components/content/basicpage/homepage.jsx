import React, { Component } from 'react';
import CarouselPage from './homeContent/carousel';
import JumbrotumPage from './homeContent/jumbrotum';
import Team from './homeContent/Team';
import YouTubePage from './homeContent/video';
import Missions from './homeContent/missions';

class Homepage extends Component {
    render() {
        return (
            <div>
              
             { /* Carousel */}
             <CarouselPage/>
             {/*Jumbrotum */}
             <Missions/>
             <JumbrotumPage/>
             {/* Video */}
             <YouTubePage/>
           {/* blog */}

             {/*Our goal and vision */}
            </div>
        );
    }
}

export default Homepage;