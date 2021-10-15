import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Landing from '../pages/landing/index.landing';
import {LhotseContext} from '../context/index.context';
import {Light, Dark} from "../constants/global.styles";


const Routes = () => {
    const {darkTheme} = useContext(LhotseContext);
    return (

        <Router>
            {
                (darkTheme) ? <Dark/> : <Light/>
            }
            <Route exact path='/'>
                <Landing/>
            </Route>
        </Router>
    )
}

export default Routes;
