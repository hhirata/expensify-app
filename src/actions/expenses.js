import database from '../firebase/firebase'
import expenses from '../reducers/expenses';

export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) =>{
    return (dispatch) => {
        const {
            description = '',
            note= '',
            amount= 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note , amount, createdAt}
        return database.ref('expenses').push( expense )
        .then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
        .catch( (e) => {

        })
    }
}
export const removeExpense = ({ id }) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
)

export const editExpense = (id,update) => (
    {
        type:'EDIT_EXPENSE',
        id,
        update
    }
)

export const setExpenses = (expenses) => (
    {
        type:'SET_EXPENSES',
        expenses
    }
)

export const startSetExpenses = () =>{
    return (dispatch) => {
        return database.ref('expenses').once('value')
                .then((snapshot) => {
                    const expensesFromFirebase =[]
                    snapshot.forEach(( childrenSnapshot) => {
                        expensesFromFirebase.push({
                            id:childrenSnapshot.key,
                            ...childrenSnapshot.val()
                        })
                    })
                   dispatch(setExpenses(expensesFromFirebase))
                })
                .catch((e)=>{})
    }
}


export const startRemoveExpense = ( {id} ) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
        .then(()=>{
            dispatch(removeExpense({ id }))
        })
    }
}

export const startEditExpense = (id,update) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(update)
                .then(()=>{
                    dispatch(editExpense(id,update))
                })
    }
}