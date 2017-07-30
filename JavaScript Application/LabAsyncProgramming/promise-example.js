let p = new Promise(function (resolve, reject) {
   setTimeout(() => resolve('Success'), 1000);
});

p.then((data) => console.log(data));