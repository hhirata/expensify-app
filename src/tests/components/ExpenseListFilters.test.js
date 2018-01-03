import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import  { filters, allFilters } from '../fixtures/filters'
import moment from 'moment'
import { endianness } from 'os';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate ={setStartDate}
            setEndDate = {setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    )
})
test('should render ExpenseListFilters',() => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly',() => {
    wrapper.setProps({
        filters:allFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'oi'
    const data = {target:{value}}
    wrapper.find('input').simulate('change',data)
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    wrapper.setProps({
        filters:allFilters
    })
    const value = 'date'
    const data = {target:{value}}
    wrapper.find('select').simulate('change',data)
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    const data = {target:{value}}
    wrapper.find('select').simulate('change',data)
    expect(sortByAmount).toHaveBeenCalled()
})


test('should date changes', () => {
    const startDate = moment()
    const endDate = moment(0).add(5,'days')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should date focus change', () => {
    const calendarFocused = 'endDate'
    console.log(wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused))
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})