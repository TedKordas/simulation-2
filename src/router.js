import React from 'react';
import Auth from './components/Auth/Auth.js';
import Dash from './components/Dash/Dash.js';
import Wiz from './components/Wiz/Wiz1.js';
import Wiz2 from './components/Wiz/Wiz2.js';
import Wiz3 from './components/Wiz/Wiz3.js';
import Wiz4 from './components/Wiz/Wiz4.js';
import Wiz5 from './components/Wiz/Wiz5.js';


import {HashRouter as Router, Route} from 'react-router-dom';

export default(
    <Router>
        <div>
            <Route component={Auth} exact path='/'/>
            <Route component={Dash} path='/dash'/>
            <Route component={Wiz} path='/wiz' />
            <Route component={Wiz2} path='/wiz2' />
            <Route component={Wiz3} path='/wiz3' />
            <Route component={Wiz4} path='/wiz4' />
            <Route component={Wiz5} path='/wiz5' />
        </div>
    </Router>
)