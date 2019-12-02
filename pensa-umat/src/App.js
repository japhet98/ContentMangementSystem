import React from 'react';
import Topnav from './components/navBar/topnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/content/basicpage/homepage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>

      <Layout>
      <Topnav/>
      <Homepage/>
      </Layout>
      
    </div>
  );
}

export default App;
