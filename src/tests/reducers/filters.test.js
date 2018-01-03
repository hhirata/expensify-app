import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup defaultFilters',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy amount',() => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'} )
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy date',() => {
    const currentState = {
        sortBy:'amount',
        text:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action )
    expect(state.sortBy).toBe('date')
})

test('should set text filter',() => {
    const currentState = {
        sortBy:'date',
        text:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const text = 'oi'
    const action = {type:'SET_TEXT_FILTER', text }
    const state = filtersReducer(currentState, action )
    expect(state.text).toBe(text)
})

test('should set startDate filter',() => {
    const action = {type:'SET_START_DATE', startDate:moment(0)}
    const state = filtersReducer(undefined, action )
    expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter',() => {
    const action = {type:'SET_END_DATE',endDate:moment(0)}
    const state = filtersReducer(undefined, action )
    expect(state.endDate).toEqual(moment(0))
})
