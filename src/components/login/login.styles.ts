// @ts-ignore
import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        display: 'grid',
        maxWidth: '960px',
        width: '100%',
        margin: '0 auto 100px',
        'grid-template-columns': 'auto minmax(320px, 479px)',
        'grid-template-rows': 'auto auto',
    },
    title: {
        fontSize: '25px',
        padding: '37px 10px 40px',
        margin: 0,
        'grid-column': '1 / end',
        'grid-row': '1 / 2',
    },
    content: {
        'grid-column': '2 / 3',
    },
    header: {
        fontSize: '20px',
        background: '#1a237e',
        textAlign: 'center',
        padding: '16px',
        color: '#fff',
        borderRadius: '20px 20px 0 0',
        letterSpacing: '1px'
    },
    body: {
        background: '#ffffff',
        borderRadius: '0 0 20px 20px',
        minHeight: '426px'
    },
    form: {
        maxWidth: '250px',
        margin: '0 auto',
        padding: '62px 0 0 0'
    },
    input: {
        border: '1px solid #1a237e',
        background: '#ffffff',
        borderRadius: '5px',
        padding: '11px',
        fontSize: '18px',
        letterSpacing: '1px',
    },
    button: {
        background: '#1a237e',
        border: 'none',
        borderRadius: '20px',
        color: '#ffffff',
        fontSize: '18px',
        padding: '10px',
        minWidth: '143px',
        cursor: 'pointer'
    },
    label: {
        display: 'block',
        fontSize: '15px',
        margin: '0 0 12px 0'
    },
    row: {
        minHeight: '108px'
    },
    buttons: {
        padding: '41px 0 0 0',
        textAlign: 'center',
    },
    error: {
        color: '#d32f2f',
        fontSize: '15px',
        margin: '2px 0 0 0'
    }
});
// @ts-ignore
