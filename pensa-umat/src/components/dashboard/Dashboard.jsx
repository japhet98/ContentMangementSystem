import React, { Component } from 'react';
import Sidenav from './sidenav';

class StudentDashboard extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>WELCOME TO DASHBOARD</h1>
                <Sidenav/>
            </div>
        );
    }
}

export default StudentDashboard;