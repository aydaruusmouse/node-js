// // Event in node js

// const eventEmiter= require('events');

// const costumEmiter= new eventEmiter();


// costumEmiter.on('respond', (e)=>{
//     console.log("responded");
// })
// costumEmiter.emit('respond');
const eventEmiter = require('events');

const costumEmiter = new eventEmiter();
costumEmiter.on('respond', (name,id)=>{
    console.log(`the name is ${name} and id${id}`);
})
costumEmiter.on('respond', ()=>{
    console.log("another logic");
})

costumEmiter.emit('respond','aido', 22)