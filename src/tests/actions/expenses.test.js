import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id]={ description, note, amount, createdAt}
    })
    database.ref('expenses').set(expensesData).then( () =>  done() )
})

test(' should setup remove expense action', () =>{
    const action = removeExpense({id:'123'})
    expect(action).toEqual(
        {
            type:'REMOVE_EXPENSE',
            id:'123'
        })
})

test(' should setup edit expense action', () =>{
    const action = editExpense('123',{
        note:'oi',
        description:'novo',
        createdAt:5,
        amount:5
    })
    expect(action).toEqual(
        {
            type:'EDIT_EXPENSE',
            id:'123',
            update:{
                note:'oi',
                description:'novo',
                createdAt:5,
                amount:5
            }
        })
})

test(' should setup add expense action', () =>{
    const addObj = {
        note:'oi',
        description:'novo',
        createdAt:5,
        amount:5
    }
    const action = addExpense(expenses[2])
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:expenses[2]
        })
})

test('should add expense to database and store ', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description:'mouse',
        amount:'3000',
        note:'better',
        createdAt:1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() =>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
            ...expenseData
            }
       })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
        })
})

test('should add expense with defaults to database and store ', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() =>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
            ...expenseData
            }
       })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
        })
})

test('should setup set expenses action with data',()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase',(done)=> {
    const store = createMockStore()
    store.dispatch(startSetExpenses())
    .then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove expenses from firebase',(done)=>{
    const store = createMockStore()
    store.dispatch(startRemoveExpense({id:expenses[0].id}))
    .then(()=>{
        const action ={
            type:'REMOVE_EXPENSE',
            id:expenses[0].id
        }
        const actions = store.getActions()
        expect(actions[0]).toEqual(action)
        return database.ref(`expenses/${actions[0].id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toBeNull()
        done()
    })
})


test('should edit expenses from firebase', (done) => {
    const store = createMockStore()
    const id  = expenses[0].id
    const update = {
        note:'this is update',
        description:'new test',
        amount:56734.67,
        createdAt:15000
    }
    store.dispatch(startEditExpense(id,update)).then(()=>{
        const action ={
            type:'EDIT_EXPENSE',
            id,
            update
        }
        const actions = store.getActions()
        expect(actions[0]).toEqual(action)
        return database.ref(`expenses/${actions[0].id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.key).toBe(id)
        expect(snapshot.val()).toEqual(update)
        done()
    })

})
// test(' should setup add expense action default', () =>{
//     const addDefault ={
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = addExpense()

//     expect(action).toEqual(
//         {
//             type:'ADD_EXPENSE',
//             expense:{
//                 ...addDefault,
//                 id:expect.any(String)
//             }
//         })
// })