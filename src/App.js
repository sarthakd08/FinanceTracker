import React from 'react';
import useStyles from './styles';

import {Grid} from '@material-ui/core'

import Details from './components/Details/Details';
import Main from './components/Main/Main'


const App = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.grid} container spacing={2} alignItems="center" justify="center" style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title={'Income'} type={'income'} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title={'Expense'} type={'expense'} />
                </Grid>
                
            </Grid>
            
            
        </div>
    )
}

export default App;
