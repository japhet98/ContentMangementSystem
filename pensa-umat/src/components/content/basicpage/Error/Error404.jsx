import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Error404 extends Component {
    render() {
        return (
            <div>
                <h1 style = {{textAlign:"center"}}>Error 404</h1>
               <Link to ="/">Go Home</Link>
            </div>
        );
    }
}

export default Error404;