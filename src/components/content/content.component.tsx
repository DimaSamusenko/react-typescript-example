import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {routes} from '../../config';

import {pushRoute} from '../../helpers/route-helper';

import {Nav} from "../nav/nav.component";
import {History} from "../history/history.component";
import {Profile} from "../profile/profile.component";

import {useStyles} from './content.styles';


export function Content() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>
                    TEST SPA app
                    <button className={classes.logout} type="button" onClick={handleLogout}>Выход</button>
                </h1>
                <div className={classes.content}>
                    <Nav/>

                    <Switch>
                        <Route component={History} exact path={routes.index}/>
                        <Route component={Profile} exact path={routes.profile}/>
                        <Redirect from='*' to={routes.index}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}


function handleLogout() {
    pushRoute(routes.logout, null);
}
