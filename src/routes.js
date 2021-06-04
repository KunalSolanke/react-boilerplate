import React from 'react';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import WelcomeScreen from './layouts/WelcomeScreen/WelcomeScreen';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const projectRouter = () => {
    const {path} = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={path} component={WelcomeScreen} />
            </Switch>
        </>
    );
};

export default () => {
    console.log('Starting app');
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect path="/" to={BASE_URL} />
                    </Route>
                    <Route path={`/${BASE_URL}`} component={projectRouter} />
                </Switch>
            </BrowserRouter>
        </>
    );
};
