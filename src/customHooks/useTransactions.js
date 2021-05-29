import {useContext} from 'react'

import {ExpenseTrackerContext} from '../context/context';
import { incomeCategories, expenseCategories, resetCategories} from '../constants/categories';
import {getFilteredTransactions} from '../context/contextUtils';

const useTransactions = (title) => {
    resetCategories();
    const {transactions, userSelectedMonth} = useContext(ExpenseTrackerContext);
    // console.log('TRANSACTION FROM CONTEXT', transactions);
    let transactionsPerType = transactions.filter((t) => t.type === title);
    if(userSelectedMonth) {
        transactionsPerType = getFilteredTransactions(userSelectedMonth.value, transactionsPerType);
    }
    const total = transactionsPerType.reduce((all, item, index) => {
        return all += item.amount;
    }, 0)

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    // console.log({transactionsPerType, total, categories});

    transactionsPerType.forEach( (t) => {
        const category = categories.find((c) => c.type === t.category);
        if(category) {
            category.amount += t.amount;
        }
    });

    // console.log('Categories after adding type wise amount total', categories);

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets : [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    // console.log('Final chartData', chartData);
    return {total, chartData}
}

export default useTransactions;