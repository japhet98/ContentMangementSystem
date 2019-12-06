import React from 'react';
import Topnav from './components/navBar/topnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/content/basicpage/homepage';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Topnavigation from './components/navigation/topnavigation';
import AboutPage from './components/content/basicpage/aboutpage';
import Error404 from './components/content/basicpage/Error/Error404';
import Contactpage from './components/content/basicpage/contactpage';
import Footer from './components/footer/footer';
import StudentDashboard from './components/dashboard/Dashboard';
import Blog from './components/content/basicpage/homeContent/blog';
import Chart from './components/dashboard/chart/chart';
import SignUp from './components/Account/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Switch>
    <Layout  path="/">   
    <Topnav/>
        <Switch>
          
          <Route exact path="/" component={Homepage} />   
          <Route path ="/about-us" component={AboutPage}/>
          <Route path ="/contact-us" component={Contactpage}/>
          <Route path ="/students" component ={StudentDashboard}/>
          <Route path ="/blog" component ={Blog}/>
          <Route path ="/chart" component = {Chart}/>
          <Route path ="/signup" component ={SignUp}/>
        </Switch>
        <Footer/>
      </Layout>    
      <Route exact component={Error404}/>
      </Switch>
     
      </BrowserRouter>

      
     
     
    </div>
  );
}

export default App;
