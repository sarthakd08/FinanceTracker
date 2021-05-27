import {monthsList} from '../constants/AppConstants';
import {getMonth} from '../utils/formateDate';

export const getFilteredTransactions = (selectedMonth, allTransactions = []) => {
    return allTransactions.filter((t) => getMonth(t.date) == selectedMonth)
}