let fs = require('fs');

function after(times,cb) {
    const school = {

    }
    return function(key,value) {
        school[key] = value;
        if (--times == 0) {
            cb(school);
        }
    }
}

const out = after(2,function(result){
    console.log(result);
})

fs.readFile('./name.txt','utf8',function(err,data){
    out('name',data);
})

fs.readFile('./age.txt','utf8',function(err,data){
    out('age',data);
})
