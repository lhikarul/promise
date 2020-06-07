function perform (anyMethod,wrappers) {
    wrappers.forEach(wrapper => wrapper.initialize());
    anyMethod();
    wrappers.forEach(wrapper => wrapper.close());
}

perform(function(){
    console.log('say');
},[{
    initialize() {
        console.log('wrapper 1 before saying something...');
    },
    close () {
        console.log('wrapper 2 close');
    }
},{
    initialize() {
        console.log('wrapper 2 before saying something...');
    },
    close () {
        console.log('wrapper 2 close');
    }
}])