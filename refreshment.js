// Event loop

// console.log("First Task");
// // Time consuming
// setTimeout(()=>{
//     console.log("wait somethime");
// },0);

// console.log("third tasl");

// setInterval(function cb(){
//    console.log("hello world");
// },1000)

// console.log("first task");


const { rejects } = require('assert');
const {readFile, stat, writeFile} = require('fs');
const { resolve } = require('path');
const util= require('util');

const readFilePromise= util.promisify(readFile);
const writeFilePromise= util.promisify(writeFile);
// const getPath= (path)=>{
//      return new Promise((resolve, rejects)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 rejects(err);
//             }
//             resolve(data);
        
//         })
//      })
// }

// getPath('file.txt').then(result => console.log(result)).catch((err)=> console.log(err))

const start= async()=>{
  try {
    const first = await readFilePromise('file.txt');
    const second= await readFilePromise('test.txt');
    console.log(first,second);
  } catch (error) {
      console.log(error);
  }
}

start();