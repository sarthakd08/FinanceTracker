import {getFilteredTransactions} from './contextUtils';

// eg state = {
//     transactions: [],
//     selectedMonth
// }
const contextReducer = (state, action) => {
    let transactions = [];
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            transactions = [...action.payload];
            return {...state, transactions};
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state.transactions]; //To make the transaction add at top of array, first add the new payload and then spread all the existing.
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return {...state, transactions };

        case 'DELETE_TRANSACTION':
            transactions = state.transactions.filter((t) => t.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return {...state, transactions};

        case 'SET_SELECTED_MONTH': 
            return {...state, selectedMonth: action.payload}
        
        // case 'FILTER_TRANSACTIONS_FOR_MONTH':
        //     console.log('FILTERRRR', action.payload, state);
        //     transactions = getFilteredTransactions(action.payload, JSON.parse(localStorage.getItem('transactions')));
        //     return transactions;

        default:
            return state;
    }
}

export default contextReducer;