import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
class JumbrotumPage extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{marginTop:"100px"}}>
                    <div style={{textAlign:"center", marginTop:"50px", color:"gray",fontSize:"30px"}}>
                 <span style={{textDecoration:"underline"}}>  <h1>1:1 | 1253</h1></span><br/>
                 <span><h1>GENDER BALANCE  STUDENTS AND ALUMINI </h1></span>
                     {/* <br/>GENDER BALANCE
                   <h1>1253<br/>STUDENTS AND ALUMINI</h1>|</span> */}
                  
                
                   </div>
                </Jumbotron>
            </div>
        );
    }
}

export default JumbrotumPage;