//const Promise = require('./Promise');

console.log('Before promise');
let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve({name:'Pesho'}), 1000);
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve({name:'Gosho'}), 1500);
});
let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve({name:'Kiro'}), 400);
});
console.log('After promise');

Promise.all([p1, p2, p3]).then((results) => {
    console.log(results.map(r => r.name).join('\n'));
});
//p1.then((data) => console.log(data.name));
//p2.then((data) => console.log(data.name));
//p3.then((data) => console.log(data.name));