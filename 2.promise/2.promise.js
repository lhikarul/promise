const Promise = require('./Promise');

let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("success");
    },1000)
});

promise.then(data => {
    console.log(data);
},err => {
    console.log('err ',err);
    
})

promise.then(data => {
    console.log(data);
},err => {
    console.log('err ',err);
    
})

promise.then(data => {
    console.log(data);
},err => {
    console.log('err ',err);
    
})