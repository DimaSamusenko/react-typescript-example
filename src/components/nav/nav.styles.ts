// @ts-ignore
import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    mainNavWrapper: {},
    mainNav: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0
    },
    mainNavItem: {
        listStyle: 'none',
        '&:first-of-type a': {
            borderRadius: '20px 0 0 0',
            borderRight: 'none'
        },
        '&:last-of-type a': {
            borderRadius: '0 20px 0 0'
        },
        '& a': {
            display: 'block',
            padding: '7px 34px',
            fontSize: '16px',
            textDecoration: 'none',
            color: '#1a237e',
            border: '2px solid #1a237e',
            borderBottom: 'none',
            '&:hover': {
                background: '#1a237e',
                color: '#ffffff'
            },
            '&.navActive': {
                background: '#1a237e',
                color: '#ffffff'
            }
        },
    }
});
// @ts-ignore
