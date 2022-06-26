const path= require('path');

console.log(path.sep);

const filepath= path.join('/content', 'subcontent', 'text.txt')
console.log(filepath);

// base

const base = path.basename(filepath);
console.log(base);


// absolute path
const absolutepath= path.resolve(__dirname, 'content', 'subcontent', 'text.txt');
console.log(absolutepath);