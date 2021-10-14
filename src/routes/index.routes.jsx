import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Landing from '../pages/landing/index.landing';


const Routes = () => {
    return (
        <Router>
            <Route exact path='/'>
                <Landing/>
            </Route>
        </Router>
    )
}

export default Routes;
