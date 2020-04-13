import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

import {useStyles} from "./spinner.styles";

export function Spinner() {
    const classes = useStyles();

    return <div className={classes.wrapper}><FontAwesomeIcon spin icon={faSpinner}/></div>;
}
