import {config} from "../../config";

export function isAuthenticated() {
    return localStorage.getItem(config.authKey);
}

export function setAuth() {
    localStorage.setItem(config.authKey, JSON.stringify(true))
}

export function clearAuth() {
    localStorage.removeItem(config.authKey);
    return true;
}
