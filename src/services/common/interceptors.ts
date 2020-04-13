import {objectToQueryString} from '../../helpers/route-helper';
import {FetchOptions} from "../../types/fetch";

export function requestInterceptor(
    url: string,
    requestConfig: FetchOptions
): [string, object] {
    const {headers, body, params} = requestConfig;
    // @ts-ignore
    const queryString = objectToQueryString(params);
    const cfg = {
        headers: {
            ...headers,
        },
        body: body && JSON.stringify(body),
    };

    return [
        url.concat(queryString ? `?${queryString}` : ''),
        Object.assign({}, requestConfig, cfg),
    ];
}

export function responseInterceptor(requestUrl: string, requestOptions: object) {
    return (response: any) => {
        if (!response.ok) {
            return handleErrors(response);
        }
        return Promise.resolve(response);
    };
}

export async function responseErrorInterceptor(error: any) {
    return error;
}

export async function handleErrors(error: any) {
    // 401
    // 403
    return Promise.reject(await handleGeneralCase(error));
}

async function handleGeneralCase(error: any) {
    const {body, status, statusText} = await errorMessage(error);

    return Promise.reject({body, status, statusText});
}

async function errorMessage(error: any) {
    try {
        return {
            body: await error.json(), status: error.status, statusText: error.statusText,
        };
    } catch (error_) { /* eslint-disable-line id-match */
        return {body: null, status: error.status || null, statusText: error.statusText || null};
    }
}
