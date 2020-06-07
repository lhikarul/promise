function say (who) {
    console.log(who + ' say something...');
    
}

Function.prototype.before = function(beforeFunc) {

    return (...args) => {
        beforeFunc();
        this(...args);
    }
}

const newFn = say.before(function(){
    console.log('before saying something...')
})

newFn("I");


// vue20. 利用函數劫持 aop

let oldPush = Array.prototype.push;

function push(...args) {
    oldPush.call(this,...args);
}

const arr = [1,2,3];

push.call(arr,4,5,6,7);

console.log(arr);
