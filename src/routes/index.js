import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';

export default (
    <Router history={hashHistory}>
        <Route exact path="/" component={HomePage}/>
    </Router>
);