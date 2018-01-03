import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSumary} from '../../components/ExpensesSumary'

test('should render 1 expense',()=>{
    const wrapper = shallow(<ExpensesSumary expenseCount={1} expensesTotal={10}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render 2 expenses',()=>{
    const wrapper = shallow(<ExpensesSumary expenseCount={2} expensesTotal={20}/>)
    expect(wrapper).toMatchSnapshot()
})