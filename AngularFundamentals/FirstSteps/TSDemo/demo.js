"use strict";
var myName = 'pesho';
var myAge = 15;
var Car = /** @class */ (function () {
    function Car(paint, engine) {
        this.paint = paint;
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log('My color is ' + this.paint + 'and i have ' + this.engine + ' engine');
    };
    return Car;
}());
var Lambo = new Car('black', 'V8');
Lambo.start();
var pesho = {
    name: 'Pesho',
    age: 12
};
var gosho = {
    age: 15
};
var cal = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    params.map(function (x) {
        console.log(x);
    });
};
cal(pesho, gosho);
