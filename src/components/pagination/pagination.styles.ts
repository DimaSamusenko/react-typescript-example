// @ts-ignore
import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 0 30px 0'
    },
    leftArrow: {
        color: '#2c3387',
        paddingRight: '15px;',
        cursor: 'pointer'
    },
    rightArrow: {
        color: '#2c3387',
        paddingLeft: '15px;',
        cursor: 'pointer'
    },
    page: {
        width: '30px',
        fontSize: '16px',
        padding: '2px'
    }
});
// @ts-ignore
