import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {routes} from '../../config';
import {isAuthenticated} from '../../services/common/auth';

import {Login} from "../login/login.component";
import {Content} from "../content/content.component";
import {Logout} from "../logout/logout.component";

import './app.styles';

export function App() {
    function renderContent() {
        return isAuthenticated() ? <Content/> : <Redirect to={routes.login}/>;
    }

    function renderLogin() {
        return !isAuthenticated() ? <Login/> : <Redirect to={routes.index}/>;
    }

    return (
        <div className="App">
            <Switch>
                <Route path={routes.login} render={renderLogin}/>
                <Route component={Logout} path={routes.logout}/>
                <Route path={routes.index} render={renderContent}/>
                <Redirect from='*' to={routes.index}/>
            </Switch>
        </div>
    );
}
