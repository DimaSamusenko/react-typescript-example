import {jss} from 'react-jss';

export const styles = jss.createStyleSheet({
    '@global': {
        html: {
            margin: 0,
            padding: 0
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        'strong, b': {
            fontWeight: 'bold',
        },
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: '#e1e1e1',
            fontFamily: 'Open Sans, sans-serif',
        },
    },
}).attach();
