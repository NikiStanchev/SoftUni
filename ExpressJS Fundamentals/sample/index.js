let test = require('./storage/db');

test.put('first', 'firstValue');
test.put(2, 'number');
test.put('second', 'secondValue');

//console.log(test.get('first'));
//console.log(test.getAll());

test.update('second', 'secondSecondValue');

//console.log(test.getAll());

test.delete('first');
//console.log(test.getAll());

//test.clear();
//console.log(test.getAll());


//test.save();
test.saveASynchron();
test.clear();
//test.load();
//console.log(test.getAll());

test.loadASynchron(()=>{
    console.log(test.getAll());
});

test.putASynchron(()=>{
    test.put('last', 'lastValue');
});


console.log(test.getAll());

