import React from 'react';

import {useStyles} from './profile.styles';

export function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <p>John Smith</p>
            <p>+1 928 387-39-00</p>
            <p>CA, LA</p>
        </div>
    );
}
