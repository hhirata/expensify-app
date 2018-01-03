import moment from 'moment'

export default [
    {
        id:'1',
        description:'oi',
        note:'',
        amount:5,
        createdAt:0
    },
    {
        id:'2',
        description:'novo',
        note:'',
        amount:10,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:'3',
        description:'henrique',
        note:'',
        amount:15,
        createdAt:moment(0).add(4,'days').valueOf()
    }
    ]