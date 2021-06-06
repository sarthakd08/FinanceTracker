import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';
import {addTransaction, deleteTransaction} from './actions';
import AuthContextProvider from './AuthContext';

// const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
// const initialState = [];
const initialState = {
    'transactions': [],
    'selectedMonth': null
}

export const ExpenseTrackerContext = createContext(initialState);

 
export const Provider = ({children}) => {

    const [state, dispatch] = useReducer(contextReducer, initialState);

    //Action Creaters
    const setTransactions = (t) => dispatch({type: 'SET_TRANSACTIONS', payload: t})
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const selectMonth = (monthId) => dispatch({type: 'SET_SELECTED_MONTH', payload: monthId})
    /////////////

    const balance = state.transactions?.reduce((all, item, index) => {
        return item.type == 'Income' ? all += item.amount : all -= item.amount;
    }, 0)


    return (
        <AuthContextProvider>
            <ExpenseTrackerContext.Provider value={{ 
                addTransaction, 
                deleteTransaction,
                transactions: state.transactions,
                balance,
                selectMonth,
                userSelectedMonth: state.selectedMonth,
                setTransactions
            }}>
                {children}
            </ExpenseTrackerContext.Provider>
        </AuthContextProvider>
    )
}