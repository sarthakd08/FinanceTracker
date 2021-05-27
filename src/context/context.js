import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';
import {addTransaction, deleteTransaction} from './actions';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
// const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

 
export const Provider = ({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creaters
    // const setAllTransactions = (all) => dispatch({type: 'SET_ALL_TRANSACTIONS', payload: all});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    // const filterTransactionsForMonth = (data) => dispatch({type: 'FILTER_TRANSACTIONS_FOR_MONTH', payload: data});
    /////////////

    const balance = transactions.reduce((all, item, index) => {
        return item.type == 'Income' ? all += item.amount : all -= item.amount;
    }, 0)



    return (
        <ExpenseTrackerContext.Provider value={{ 
            // setAllTransactions,
            addTransaction, 
            deleteTransaction,
            // filterTransactionsForMonth,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}