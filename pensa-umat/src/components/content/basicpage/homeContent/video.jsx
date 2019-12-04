import React from 'react';
import  {Player}  from 'video-react';
import 'video-react/dist/video-react.css'
class YouTubePage extends React.Component {

 render(){
  return (
    <Player
    fluid = 'false'
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
     
      
      height = '50'
    />
  );
};

}
export default YouTubePage;