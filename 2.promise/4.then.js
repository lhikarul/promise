const Promise = require('./Promise');

const p = new Promise((resolve,reject) => {
    resolve();
})


// then 返回的都是一個新的 promise

let promise1 = new Promise((resolve,reject) => {
    resolve(1000);
})

let promise2 = promise1.then(data => {
    throw new Error("error 222");
    // return data;
})

promise2.then(data => {
    console.log(data);
    
},err => {
    console.log(err);
    
})