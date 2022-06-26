// FileSystem

// ReadFile Ayscronously

// const file= require('fs');
const {readFileSync, writeFileSync} = require('fs');
// file.readFile('file.txt', (err, data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log(`content is ${data}`);
//     }
// })

// ReadFile Syscronously
const filename= 'file.txt';
// const content = file.readFileSync(filename);

// console.log(`the content is ${content}`);
const first= readFileSync('file.txt', 'utf-8');
console.log(first);
const addText= writeFileSync('test.txt', `this is new text ${first}`);