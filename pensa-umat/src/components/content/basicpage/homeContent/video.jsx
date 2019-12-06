import React from 'react';
import  {Player}  from 'video-react';
import 'video-react/dist/video-react.css'
class YouTubePage extends React.Component {

 render(){
   const videoId = "nL4dtUeECls"
   var my_script = `https://www.youtube.com/embed/${videoId}?controls=0`
  return (

    <div style ={{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:"0px"}}>
      <iframe width="420" height="100" frameBorder="0" allowFullScreen src={my_script} 
      style={{left:"0px",top:"0px", height:"70%", width:"100%", position:"absolute"}}>
</iframe>
    </div>
    // <Player
    // fluid = 'false'
    //   playsInline
    //   poster="/assets/poster.png"
    //   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
     
      
    //   height = '50px'
    // />
/* <div>
  <video width="320" height="240" controls  style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"1000px"}}> 
  <source src="https://www.youtube.com/watch?v=nL4dtUeECls&feature=youtu.be" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
  </video>
</div> */
  );
};

}
export default YouTubePage;