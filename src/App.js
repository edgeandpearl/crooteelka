import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Slider from './pages/slider';
import PageNotFound from './pages/pageNotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/slider" component={Slider}/>
                <Route exact path="/" render={() => <Redirect to="/slider"/>}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
