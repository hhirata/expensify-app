import React from 'react'
import {connect} from 'react-redux'
import 'react-dates/initialize'
import {setTextFilter, sortByAmount, sortByDate,setStartDate, setEndDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class  ExpenseListFilters extends React.Component {
    state = {
        calendarFocused:null
    }
    onDatesChange = ({ startDate, endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => this.setState(()=>({calendarFocused}))
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e)=> {
        if(e.target.value==='date'){
            this.props.sortByDate()
        }else if (e.target.value === 'amount'){
            this.props.sortByAmount()
        }
    }
    render(){
       return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange }/>
                <select onChange={this.onSortChange }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDateId="start"
                endDateId="end"
                startDate={ this.props.filters.startDate }
                endDate = { this.props.filters.endDate }
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange= {this.onFocusChange}
                isOutsideRange= { () => false}
                numberOfMonths={1}
                showClearDates={true}
            />
            </div>
        )
    }
}

const mapStateToProps = ( state ) => (
    {
        filters:state.filters
    }
)
const mapDispatchToProps =(dispatch) =>(
    {
        setStartDate:(startDate) => dispatch(setStartDate(startDate)),
        setEndDate:(endDate) => dispatch(setEndDate(endDate)),
        setTextFilter:(text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate())
    }
)
export default connect( mapStateToProps, mapDispatchToProps )(ExpenseListFilters)