import * as firebase from 'firebase'
import expenses from '../tests/fixtures/expenses'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, database as default, googleAuthProvider}
// //child_removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').push({
//     note:expenses[2].note,
//     amount:expenses[2].amount,
//     description:expenses[2].description,
//     createdAt:expenses[2].createdAt
// })

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses2 =[]
//     snapshot.forEach((childSnapshot)=>{
//         expenses2.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses2)
// },(e)=>console.log(e))

// database.ref('expenses').once('value')
// .then((snapshot)=> {
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })
// expenses.forEach((expense,index,array)=>database.ref('expenses').push({
//     note:expense.note,
//     description:expense.description,
//     amount:expense.amount,
//     createdAt:expense.createdAt
// }))

// database.ref('notes/-L1xpQb6113R4U2rprDN').update({
//     body:'else'
// })
// database.ref('notes').push({
//     title:'topics',
//     body: 'languages'
// })
// const notes = [
//     {
//         id:'1',
//         title:'first',
//         body:'note'
//     },
//     {
//         id:'2',
//         title:'other',
//         body:'no'
//     }
// ]
// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e)=>console.log(e))

// setTimeout(()=>{
//     database.ref().update({
//         name:'Hirata',
//         job:{
//             title:'backend developer',
//             company:'sydy'
//         }
//     })
// }, 3000)
// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// }, (e) => console.log(e))

// setTimeout(()=>{
//     database.ref('age').set(29)
// },3500)


// setTimeout(()=>{
//     database.ref().off('value',onValueChange)
// },7000)


// setTimeout(()=>{
//     database.ref('age').set(30)
// },10500)

// database.ref('location').once('value')
// .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
// })
// .catch((e)=>console.log(e))



// database.ref().set({
//     name: 'Henrique Hirata',
//     age:25,
//     stressLevel:5,
//     job:{
//         title:'software developer',
//         company:'google'
//     },
//     location:{
//         city:'Cuiabá',
//         country:'Brazil'
//     }
// }).then(()=> {
//     console.log('data is saved')
// }).catch((e) =>{
//     console.log(e)
// })

// database.ref().update({
//     stressLevel:9,
//     'job/company':'amazon',
//     'location/city':'Seattle'
// })
// // database.ref('age').set(26)

// // database.ref('location/city').set('CBA')

// database.ref('attributes').set({
//     height:1.79,
//     weight:72

// }).then(()=> {
//     console.log('attribute is saved')
// }).catch((e) => {
//     console.log('error')
// })

// database.ref('isSingle').remove()
// .then(()=> console.log('data is removed'))
// .catch((e) => console.log('data is not removed'))

// database.ref('isSingle').set(null)
// .then(()=>console.log('removed'))
// .catch((e)=>console.log(e))

// database.ref().update({
//     job: 'manager developer',
//     'location/city': 'cba'
// })