import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper, expense

beforeEach(()=>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history ={
        push:jest.fn()
    }
    expense = expenses[0]
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense= {expense} />)
})

test('should render EditExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(editExpense).toHaveBeenLastCalledWith(expense.id,expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expense.id})
    expect(history.push).toHaveBeenLastCalledWith('/')
})