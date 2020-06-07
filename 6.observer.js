class Subject {
    constructor() {
        this.state = 'happy';
        this.arr = [];
    }
    attach(o){
        this.arr.push(o);
    }
    setState(newState) {
        this.state = newState;
        this.arr.forEach(o => o.update(newState));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update (newState) {
        console.log(this.name + " : " + "小寶寶的狀態 " + newState);
        
    }
}

const s = new Subject("baby");
const o1 = new Observer("Dad");
const o2 = new Observer("Mom");

s.attach(o1);
s.attach(o2);
s.setState("unhappy");
s.setState("happy");