import {routes} from '../../config';
import {logout} from '../../services/login.service';

export function Logout({history}: any) {
    logout()
        .then(() => history.push(routes.login))
        .catch((error: any) => {
            history.push(routes.login);
        });
    return null;
}
