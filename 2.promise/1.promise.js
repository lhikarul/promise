const Promise = require('./Promise');

let promise = new Promise((resolve,reject) => {
    resolve("hello");
}).then(data => {
    console.log(data);
    
},err => {
    console.log('err ',err);
    
})