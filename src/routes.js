import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import WelcomeScreen from './layouts/WelcomeScreen/WelcomeScreen';

export default () => (
    <>
        <BrowserRouter>
            <Redirect path="/" to={process.env.BASE_URL} />
            <Route path={process.env.BASE_URL}>
                <Switch>
                    <Route exact path="/" component={WelcomeScreen} />
                </Switch>
            </Route>
        </BrowserRouter>
    </>
);
