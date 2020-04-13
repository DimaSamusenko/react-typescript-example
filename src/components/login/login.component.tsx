import React, {useState} from 'react';
import useYup from '@usereact/use-yup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import {ILoginState} from '../../types/login';
import {pushRoute} from '../../helpers/route-helper';
import {login} from "../../services/login.service";
import {routes} from "../../config";

import {validationSchema} from "./login-schema";
import {useStyles} from './login.styles';


export function Login() {
    const classes = useStyles();
    const [data, setData] = useState<ILoginState>({login: '', password: '', action: 'login'});
    const [serverError, setServerError] = useState('');
    const {errors, validate} = useYup(data, validationSchema, {
        validateOnChange: false
    });

    return (
        <div>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>TEST SPA app</h1>
                <div className={classes.content}>
                    <div className={classes.header}>Вход в личный кабинет</div>
                    <div className={classes.body}>
                        <form className={classes.form} onSubmit={submitHandler(data, validate, setServerError)}>
                            <div className={classes.row}>
                                <label htmlFor="login" className={classes.label}>Логин</label>
                                <input
                                    id="login"
                                    className={classes.input}
                                    type="text"
                                    value={data.login}
                                    onChange={handleChange('login', setData)}
                                    placeholder="user@mail.ru"
                                />
                                {errors.login && (
                                    <p className={classes.error}>{errors.login}</p>
                                )}
                            </div>
                            <div className={classes.row}>
                                <label htmlFor="password" className={classes.label}>Пароль</label>
                                <input
                                    id="password"
                                    className={classes.input}
                                    type="password"
                                    value={data.password}
                                    onChange={handleChange('password', setData)}
                                    placeholder="*********"
                                />
                                {errors.password && (
                                    <p className={classes.error}>{errors.password}</p>
                                )}
                            </div>
                            <div className={classes.buttons}>
                                <button className={classes.button} type="submit">
                                    Вход <FontAwesomeIcon icon={faLongArrowAltRight}/>
                                </button>
                                {serverError && (
                                    <p className={classes.error}>{serverError}</p>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

function handleChange(name: keyof ILoginState, setData: any) {
    return ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        setData((prevData: ILoginState) => ({
            ...prevData,
            [name]: target.value
        }));
    }
}

function submitHandler(data: ILoginState, validate: any, setServerError: any) {
    return (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        validate(data).then((validation: any) => {
            if (!validation.isValid) {
                return validation;
            }

            login(data)
                .then((response: any) => {
                    if(response.result === 'ok') {
                        return pushRoute(routes.index, null);
                    }
                    return setServerError(response.error)

                })
                .catch((error: any) => {
                    console.log(error);
                })
        });
    }
}
