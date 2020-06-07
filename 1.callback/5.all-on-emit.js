let fs = require('fs');

const event = {
    _arr: [],
    on(fn){
        this._arr.push(fn);
    },
    emit(){
        this._arr.forEach(fn => fn());
    }
}

const school = {};

event.on(function(){
    console.log('ok ',school);
})

event.on(function(){
    if (Object.keys(school).length === 2) {
        console.log(school);
    }
    console.log('2');
    
})


fs.readFile('./name.txt','utf8',function(err,data){
    school.name = data;
    event.emit();
})

fs.readFile('./age.txt','utf8',function(err,data){
    school.age = data;
    event.emit();
})
