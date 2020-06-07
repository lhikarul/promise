const fs = require('fs');

function read (url) {
    return new Promise((resolve,reject) => {
        fs.readFile(url,"utf8",function(err,data){
            if (err) reject(err);
            resolve(data);
        })
    }) 
}

read('./name.txt').then((data) => {
    return read("./age.txt");
},err => {
    console.log(err);
}).then(data => {
    console.log(data);
},err => {
    console.log(err);
})