import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

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
    const action = addExpense(addObj)
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{
               ...addObj,
               id:expect.any(String)
            }
        })
})

test(' should setup add expense action default', () =>{
    const addDefault ={
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()

    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{
                ...addDefault,
                id:expect.any(String)
            }
        })
})