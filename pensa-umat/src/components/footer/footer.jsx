import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
       var d = new Date();
        return (
            <div>
              
<footer className="page-footer font-small unique-color-dark">

  <div style={{backgroundColor:" #6351ce"}}>
    <div className="container">

    
      <div className="row py-4 d-flex align-items-center">

       
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0" style={{color:"white"}}>Get connected with us on social networks!</h6>
        </div>
        
        <div className="col-md-6 col-lg-7 text-center text-md-right  ">

        <Link to="/"  style={{color:"white"}} className="fb-ic">
       
            <i className="fa fa-facebook  mr-4"> </i>
         
          </Link>
          <Link to="/"  style={{color:"white"}} className="tw-ic">
        
            <i className="fa fa-twitter white-text mr-4"> </i>
         
       </Link>
       <Link to="/"  style={{color:"white"}}  className="gplus-ic">
         
            <i className="fa fa-google-plus white-text mr-4"> </i>
        
         </Link>
         <Link to="/"  style={{color:"white"}} className="li-ic">
         
            <i className="fa fa-linkedin white-text mr-4"> </i>
         
         </Link>
         <Link to="/"  style={{color:"white"}}  className="ins-ic">
        
            <i className="fa fa-instagram white-text"> </i>
         
            </Link>
        </div>
      
      </div>
    

    </div>
  </div>

 
  <div className="container text-center text-md-left mt-5">

  
    <div className="row mt-3">

     
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Company name</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <Link to="/">MDBootstrap</Link>
        </p>
        <p>
          <Link to="/">MDWordPress</Link>
        </p>
        <p>
          <Link to="/">BrandFlow</Link>
        </p>
        <p>
          <Link to="/">Bootstrap Angular</Link>
        </p>

      </div>
     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

       
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <Link to="/">Your Account</Link>
        </p>
        <p>
          <Link to="/">Become an Affiliate</Link>
        </p>
        <p>
          <Link to="/">Shipping Rates</Link>
        </p>
        <p>
          <Link to="/">Help</Link>
        </p>

      </div>
    
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i className="fa fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
      

    </div>
   

  </div>
  
  <div className="footer-copyright text-center py-3">&copy; {d.getFullYear()} Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> TWIFO PRASO SENIOR HIGH SCHOOL</a>
  </div>
 
</footer>

            </div>
        );
    }
}

export default Footer;