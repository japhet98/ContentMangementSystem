import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from '../content/basicpage/homepage';
import AboutPage from '../content/basicpage/aboutpage';
class Topnavigation extends Component {
    render() {
        return (
            <div>
               
                <Switch>
                    <Route path = "/about-us" component = {AboutPage}/>
                    <Route exact path ="/" component = {Homepage}/>
                </Switch>
               
            </div>
        );
    }
}
export default Topnavigation;