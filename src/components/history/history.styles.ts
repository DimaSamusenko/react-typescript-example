// @ts-ignore
import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        borderRadius: '0 20px 20px 20px',
        overflow: 'hidden',
        background: '#ffffff',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    header: {
        background: '#1a237e',
        '& th': {
            padding: '21px 5px',
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: 'normal'
        }
    },
    body: {
        textAlign: 'center',
        fontSize: '18px',
        '& td': {
            padding: '10px 5px',
            borderBottom: '1px solid #cccccc',
            '&:first-of-type': {
                borderBottom: 'none',
                width: '31px',
            },
            '&:last-of-type': {
                borderBottom: 'none',
                width: '31px',
            }
        },
        '& tr:first-of-type td': {
            paddingTop: '27px'
        },
        '& tr:last-of-type td': {
            borderBottom: 'none',
            paddingBottom: '27px'
        }
    }
});
// @ts-ignore
