import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpenses, startAddExpense, addExpense} from './actions/expenses'
import {login, logout} from './actions/auth'
import getVisibleItems from './selectors/expenses'
import 'react-dates/initialize'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'

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
let hasRendered = false
const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered=true
    }
}
ReactDOM.render(<p>Loading</p>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login({uid:user.uid}))
        store.dispatch(startSetExpenses()).then(()=>{
           renderApp()
           if(history.location.pathname === '/'){
                history.push('/dashboard')
           }
        })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

