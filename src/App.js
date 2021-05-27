import React, {useState, useContext, useEffect} from 'react';
import useStyles from './styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Grid, Select, MenuItem} from '@material-ui/core';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import {monthsList} from './constants/AppConstants';
import {ExpenseTrackerContext} from './context/context'
import { getMonth } from './utils/formateDate';

const App = () => {
    const {selectedMonth} =  useContext(ExpenseTrackerContext);
    // const [selectedMonth, setSelectedMonth] = useState({});
    const classes = useStyles();

    useEffect(() => {
        //API to call all Transactions, ie. getting from local Storage in our case
    //    const allTransactions = JSON.parse(localStorage.getItem('transactions'));
    //    if(allTransactions?.length) {
    //        const currentMonth = getMonth();
    //        setAllTransactions(allTransactions);
    //     //    filterTransactionsForMonth(currentMonth);
    //    }

    //    return(() => {
    //        console.log('Exittingggggggg');
    //    })
    }, [])

    return (
        <div>
            {/* <Select className={classes.selectContainer} onChange={(e) => {filterTransactionsForMonth(e.target.value)}}>
                {monthsList.map((c) => <MenuItem key={c.value} value={c.value}>{c.name}</MenuItem>)}
            </Select>
             */}
            <Grid className={classes.grid} container spacing={2} alignItems="center" justify="center" >
                <Grid item xs={12} sm={4} className={classes.mobile}> 
                    <Details title={'Income'} type={'income'} />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title={'Income'} type={'income'} />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title={'Expense'} type={'expense'} />
                </Grid>
                
            </Grid>
            
            
        </div>
    )
}

export default App;
