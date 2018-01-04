const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('my resolved data')
    },1500)
})

console.log('before')
promise.then( (data) => console.log(data) ).catch((error)=> error)
console.log('after')