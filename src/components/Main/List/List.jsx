import React, {useContext, useEffect, useState} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import {ExpenseTrackerContext} from '../../../context/context';
import {getFilteredTransactions} from '../../../context/contextUtils';

// import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {transactions, deleteTransaction, userSelectedMonth} = useContext(ExpenseTrackerContext)

    const [listOfTransactions, setListOfTransactions] = useState(transactions)

    useEffect(() => {
        if(userSelectedMonth) {
            let monthlyTransactions = getFilteredTransactions(userSelectedMonth.value, transactions);
            console.log('In list Transactions', monthlyTransactions);
            setListOfTransactions(monthlyTransactions);
        }
    }, [userSelectedMonth])

    const removeTransaction = (id) => {
        if(id) {
            deleteTransaction(id);
        }
    }

    return (
        <MUIList dense={false} className={classes.list}>
            {listOfTransactions?.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`Rs ${transaction.amount} ( ${transaction.date} )`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeTransaction(transaction.id)}>
                        <Delete />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
