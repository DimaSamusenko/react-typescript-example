import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import {useStyles} from "./pagination.styles";

export function Pagination({onPageChange, page, count}: {onPageChange: any, page: number, count: number}) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.leftArrow} onClick={prev(page, onPageChange)}>
                <FontAwesomeIcon icon={faLongArrowAltLeft}/>
            </div>
            <div>
                <input
                    className={classes.page}
                    type="number"
                    value={page + 1}
                    onChange={handlePageChange(onPageChange)}
                /> / {count}</div>
            <div className={classes.rightArrow} onClick={next(page, onPageChange)}>
                <FontAwesomeIcon icon={faLongArrowAltRight}/>
            </div>
        </div>
    );
}


function handlePageChange(onPageChange: any) {
    return ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        const val = parseInt(target.value, 10) - 1;
        onPageChange((val > 1 || val < 0) ? 0 : val);
    }
}

function prev(page:number, onPageChange: any) {
    return () => {
        const val = page - 1;
        onPageChange((val > 1 || val < 0) ? 0 : val);
    }
}

function next(page:number, onPageChange: any) {
    return () => {
        const val = page + 1;
        onPageChange((val > 1 || val < 0) ? 0 : val);
    }
}
