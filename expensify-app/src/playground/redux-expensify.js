import { createStore, combineReducers } from 'redux'

const demoState = {
    expenses: [{
        id: 'sdfsdf',
        description: 'January Rent',
        note: 'This is the last payment from this adderss',
        amount: 140000,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

