const add = (a,b) => a + b

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3,4)
    // if (result !== 7){
    //     throw new Error(`You added4 and 3. The result was ${result}. Expect 7`)
    // }
    expect(result).toBe(7)
})

test('should generate greeting from name', ()=>{
    expect(generateGreeting('Henrique')).toBe('Hello Henrique!')
} )

test('should generate greeting for no name', ()=>{
    expect(generateGreeting()).toBe('Hello Anonymous!')
} )