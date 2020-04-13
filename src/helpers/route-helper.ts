/* global URLSearchParams */
import {createHashHistory} from 'history';
import {matchPath} from 'react-router-dom';

export function reloadRoute(params: {[index: string]:any}) {
    const history = createHashHistory();
    const current = {...history.location};

    if (Object.keys(params).length === 0) {
        return pushRoute(current, history);
    }

    const query = new URLSearchParams(history.location.search);

    Object.keys(params).forEach(key => {
        return params[key] === null ? query.delete(key) : query.set(key, params[key]);
    });

    return pushRoute({...current, search: query.toString()}, history);
}

export function forceReloadRoute() {
    createHashHistory().go(0);
}

export function pushRoute(route: any, history: any) {
    (history || createHashHistory()).push(route);
}

export function getQueryParams() {
    const history = createHashHistory();
    const query = new URLSearchParams(history.location.search);

    return [...query.entries()].reduce((memo: {[index: string]:any}, [key, value]) => {
        memo[key] = value; // eslint-disable-line no-param-reassign
        return memo;
    }, {});
}

export function objectToQueryString(params: object) {
    return params ? Object.keys(params).map(key => {
        // @ts-ignore
        const value = params[key];

        if (typeof value === 'undefined') {
            return '';
        }

        if (value === null) {
            return encode(key);
        }

        if (Array.isArray(value)) {
            const result: string[] = [];

            value.slice().forEach(value2 => {
                if (typeof value2 === 'undefined') {
                    return;
                }
                if (value2 === null) {
                    result.push(encode(key));
                } else {
                    result.push(encode(key) + '=' + encode(value2));
                }
            });
            return result.join('&');
        }

        return encode(key) + '=' + encode(value);
    })
        .filter(x => x.length > 0)
        .join('&') : '';
}

export function getParams(pattern: string) {
    const match = matchPath(createHashHistory().location.pathname, {
        path: pattern,
        exact: true,
        strict: false,
    });

    return match ? match.params : {};
}

function encode(string: string) {
    const encodeReserveRE = /[!'()*]/g;
    const commaRE = /%2C/g;

    return encodeURIComponent(string)
        .replace(encodeReserveRE, replacer => '%' + replacer.charCodeAt(0).toString(16))
        .replace(commaRE, ',');
}
