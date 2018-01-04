import expensesReducer from '../../reducers/expenses'
import expenses  from '../../tests/fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'oi'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses])
})

test('should add expense', ()=>{
    const expense = {
        'id':'4',
        description:'oi',
        note:'',
        amount:5,
        createdAt:0
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should update expense by id', ()=>{
    const update = {
        id:expenses[0].id,
        description:'teste',
        note:'',
        amount:123,
        createdAt:55
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:update.id,
        update
    }
    const state = expensesReducer(expenses,action)
    expect(state[0]).toEqual(update)
})

test('should not edit expense by id', ()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id:'oi',
        update:{}
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should set expenses',()=>{
    const action = {
        type:'SET_EXPENSES',
        expenses
    }
    const  expensesDefault =[
        {
            'id':'4',
            description:'vccvc',
            note:'',
            amount:1245,
            createdAt:656894
        },
        {
            'id':'5',
            description:'kkkk',
            note:'',
            amount:562,
            createdAt:465656
        }
    ]
    const state = expensesReducer(expensesDefault,action)
    expect(state).toEqual(expenses)
})