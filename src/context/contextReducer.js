
const contextReducer = (state, action) => {
    let transactions = [];
    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]; //To make the transaction add at top of array, first add the new payload and then spread all the existing.
            return transactions;

        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            return transactions;

        default:
            return state;
    }
}

export default contextReducer;