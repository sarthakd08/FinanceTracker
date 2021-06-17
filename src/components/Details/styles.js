import {makeStyles} from '@material-ui/core';

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
    }, 
    expense : {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
    },
    card: {
        background: '#12232E',
        color: '#e8e8e8'
    }
}))