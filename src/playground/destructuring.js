//Object destructuring
// const person ={
//     name:'Henrique',
//     age:25,
//     location:{
//         city:'Cuiabá',
//         temp:40
//     }
// }
// const { name:firstName = 'Anonymous' , age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp:temperature } = person.location
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)


//array destructuring

// const address = ['Rua Nortelândia', 'Cuiabá','MT','78025493']

// const [ , city = 'City' , state = 'DF', zip ] = address

// console.log(`You are in ${city} ${state}.`)


const item = ['Coffee {hot}', '$2.00', '$2.50', '$2.75']

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)