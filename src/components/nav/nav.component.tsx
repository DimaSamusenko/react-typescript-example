import React from 'react';
import {NavLink} from 'react-router-dom';

import {useStyles} from './nav.styles';
import {routes} from "../../config";

export function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.mainNavWrapper}>
            <ul className={classes.mainNav}>
                <li className={classes.mainNavItem}>
                    <NavLink to={routes.index} exact activeClassName='navActive'>История</NavLink>
                </li>
                <li className={classes.mainNavItem}>
                    <NavLink to={routes.profile} activeClassName='navActive'>Профиль</NavLink>
                </li>
            </ul>
        </div>
    );
}
