import React, {useEffect, useState} from 'react';
import {parse, format} from 'date-fns';

import {useStyles} from './history.styles';
import {fetch} from "../../services/history.service";
import {Spinner} from "../spinner/spinner.component";
import {Pagination} from "../pagination/pagination.component";

export function History() {
    const classes = useStyles();
    const [data, setData] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch()
            .then(response => {
                setData(response);
            })
            .catch(console.log)
    }, []);

    return (
        <div className={classes.wrapper}>
            {
                data ? (
                    <>
                        <table className={classes.table}>
                            <thead>
                            <tr className={classes.header}>
                                <th/>
                                <th>Актив</th>
                                <th>Начало</th>
                                <th>Котировка</th>
                                <th>Конец</th>
                                <th>Котировка</th>
                                <th>Прибыль</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody className={classes.body}>
                            {
                                data.slice(10 * page, 10 * (page + 1)).map((item: any) => (
                                    <tr key={JSON.stringify(item)}>
                                        <td/>
                                        <td>{item.asset}</td>
                                        <td>{formatDate(item.startDate)}</td>
                                        <td>{item.startQuote}</td>
                                        <td>{formatDate(item.finishDate)}</td>
                                        <td>{item.finishQuote}</td>
                                        <td>{item.profit}</td>
                                        <td/>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <Pagination count={data.length} page={page} onPageChange={onPageChange(setPage)}/>
                    </>
                ) : <Spinner/>
            }
        </div>
    )
}

function formatDate(date: string) {
    return format(parse(date, 'yyyy-MM-dd HH:mm:ss', new Date()),
        'HH:mm dd.MM.yy')
}


function onPageChange(setPage: any) {
    return (page: number) => setPage(page);
}
