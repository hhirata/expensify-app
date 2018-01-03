import { createStore, combineReducers } from 'redux'








store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const {id:one} = store.dispatch(addExpense({ description:'oi', amount:100, createdAt:-211000 })).expense
const {id:two} = store.dispatch(addExpense({ description:'jljkdklfoi', amount:49800, createdAt:1000 })).expense

// console.log(one)
// store.dispatch(removeExpense({id:one}))
// store.dispatch(editExpense(two,{amount:355}))

// store.dispatch(setTextFilter('j'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-200))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

const demoState = {
    expenses: [
        {
            id:'1',
            description:'rent',
            note:'some text',
            amount:50400,
            createdAt:0
        }
    ],
    filters:{
        text:'re',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}

// const user = {
//     name:'Hirata',
//     age:25,
//     major:{
//         name:'computer sciency',
//         university:{
//             local:"mt",
//             courses:[
//                 {
//                     name:"ljjl"
//                 }
//             ]
//         }
//     }
// }

// console.log({
//     ...user,
//     location:'cuiaba'
// })