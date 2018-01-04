import authReducer from '../../reducers/auth'

test('should set uuid on login',()=>{
    const state = authReducer(undefined,{ type:'LOGIN',uid:'123'})
    expect(state.uid).toBe('123')
})

test('should clear uuid on logout',()=>{
    const state = authReducer({uid:'123'},{ type:'LOGOUT'})
    expect(state).toEqual({})
})