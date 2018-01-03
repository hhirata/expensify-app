import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates'

Enzyme.configure({
    adapter: new Adapter()
})