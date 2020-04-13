// @ts-ignore
import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        display: 'grid',
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto 100px',
        'grid-template-columns': 'auto minmax(320px, 479px)',
        'grid-template-rows': 'auto auto',
    },
    title: {
        fontSize: '25px',
        padding: '37px 10px 47px',
        margin: 0,
        'grid-column': '1 / end',
        'grid-row': '1 / 2',
    },
    content: {
        'grid-column': '1 / end',
        padding: '0 10px',
    },
    logout: {
        background: 'transparent',
        border: '2px solid #1a237e',
        borderRadius: '20px',
        color: '#1a237e',
        fontSize: '18px',
        padding: '10px',
        minWidth: '143px',
        float: 'right',
        cursor: 'pointer'
    }
});
// @ts-ignore
