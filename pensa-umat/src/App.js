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
        </Switch>
      </Layout>    
      <Route exact component={Error404}/>
      </Switch>
     
      </BrowserRouter>

      
     
     
    </div>
  );
}

export default App;
