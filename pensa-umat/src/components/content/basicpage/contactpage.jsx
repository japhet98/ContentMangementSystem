import React, { Component } from 'react';
import '../../../res/css/contactform.css'
class Contactpage extends Component {
    render() {
        return (
            <div>
               <section id="contact">
  
  <h1 class="section-header">CONTACT</h1>
  
  <div class="contact-wrapper">
    
      {/* <!---------------- 

      CONTACT PAGE LEFT 
    
      ----------------->  */}
    
    <form class="form-horizontal" role="form" method="post" action="contact.php">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value=""/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value=""/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
      {/* <!---------------- 

      CONTACT PAGE RIGHT 
    
      ----------------->  */}
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Tarkwa | WR</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:233557854823" title="Give me a call">(233) 557854823</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:japhetkuntublankson1@gmail.com" title="Send me an email">japhetkuntublankson1@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
   
            </div>
        );
    }
}

export default Contactpage;