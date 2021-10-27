import React, {useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles  from './styles';
import {TRANSACTION_TYPES} from '../../constants/AppConstants';
import useTransactions from '../../customHooks/useTransactions';

function Details({title, type}) {
    const styles = useStyles();
    const {total, chartData} = useTransactions(title);

    return (
        // <Card className={type === TRANSACTION_TYPES.INCOME ? styles.income : styles.expense}>
        <Card className={styles.card}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">Rs. {total}</Typography>
                <Doughnut data={chartData}></Doughnut>
            </CardContent>
        </Card>
    )
}


export default Details;

