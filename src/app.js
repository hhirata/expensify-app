import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleItems from './selectors/expenses'
import 'react-dates/initialize'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
// store.subscribe(()=>{
//     const { expenses, filters } = store.getState()
//     console.log(getVisibleItems(expenses,filters))
// })

// store.dispatch(addExpense({description:'Water bill','amount':565}))
// store.dispatch(addExpense({description:'Gas bill',createdAt: 456}))
// store.dispatch(addExpense({description:'rent','amount':109500}))

// store.dispatch(setTextFilter('bill'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000);

//console.log(store.getState())

const jsx = (
<Provider store={store}>
    <AppRouter />
</Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
