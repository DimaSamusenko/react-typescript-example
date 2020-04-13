import {ILoginState} from '../types/login';

import {request} from './common/request';
import {isAuthenticated, setAuth, clearAuth} from "./common/auth";

export function login(data: ILoginState) {
    if (isAuthenticated()) {
        return Promise.reject('Method login() cannot be invoked, user is already authenticated');
    }

    return request('', {
        method: 'POST',
        body: data,
    })
        .then((response: any) => {
            if(response.result === 'ok') {
                setAuth();
            }
            return response;
        })
        .catch((error: any) => {
            console.log(error || '---> POST login failed', data);
            return Promise.reject(error);
        });
}


export function logout() {
    clearAuth();
    return Promise.resolve()
}
