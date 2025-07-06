// const lib=require('./lib.js');  coomon JS syntax
import {sum,diff} from './lib.js'
import fs from 'fs'//file system module of node packages


//Reading file synchronously
// const txt=fs.readFileSync('demo.txt','utf-8');// file and encoding, 
// console.log(txt);

//Rreading file Asynchronously.

fs.readFile('demo.txt','utf-8', (err, txt)=>{
        console.log(txt);  //in node module callbacks first argument is error and other is data
})


console.log(sum(2,5), diff(7,3));