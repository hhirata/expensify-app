import {login, logout} from '../../actions/auth'

test('should setup action LOGIN',()=>{
    const action = login({uid:'123'})
    expect(action).toEqual({
        type:'LOGIN',
        uid:'123'
    })
})

test('should setup action LOGOUT',()=>{
    const action = logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})