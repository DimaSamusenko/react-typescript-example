/* global fetch */
import {
    responseInterceptor,
    responseErrorInterceptor,
    requestInterceptor,
} from './interceptors';

import {config} from "../../config";
import {FetchOptions} from "../../types/fetch";

const defaults: FetchOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: null,
};

export function request(url: string, options: FetchOptions = {}) {
    return http(apiUrl(url), options);
}

export function http(url: string, options: FetchOptions = {}) {
    return fetch(...requestInterceptor(url, Object.assign({}, defaults, options)))
        .then(responseInterceptor(url, options))
        .then((response: any) => options.responseType === 'blob' ? response.blob() : response.text())
        .then((text: string) => {
            try {
                return Promise.resolve(JSON.parse(text));
            } catch (error) {
                return Promise.resolve(text);
            }
        })
        .catch(responseErrorInterceptor);
}

function apiUrl(endpoint: string) {
    return `${config.api.url}${endpoint}`;
}
