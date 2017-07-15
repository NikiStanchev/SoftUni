let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('Meth Enforcer Unit Tests', () => {
   describe('addFive', () => {
      it('with a string should return undefind', () =>{
         expect(mathEnforcer.addFive('nakov')).to.be.undefined;
      });
       it('with positive numbers should return number + 5', () =>{
           expect(mathEnforcer.addFive(-4)).to.equal(1);
       });

       it('with negavite numbers should return number + 5', () =>{
           expect(mathEnforcer.addFive(4)).to.equal(9);
       });

       it('with floating numbers should return number + 5', () =>{
           expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
       });
   });

    describe('subtractTen', () => {
        it('with a string should return undefind', () =>{
            expect(mathEnforcer.subtractTen('nakov')).to.be.undefined;
        });
        it('with positive numbers should return number + 5', () =>{
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
        });

        it('with negavite numbers should return number + 5', () =>{
            expect(mathEnforcer.subtractTen(4)).to.equal(-6);
        });

        it('with floating numbers should return number + 5', () =>{
            expect(mathEnforcer.subtractTen(15.14)).to.be.closeTo(5.14, 0.01);
        });
    });

    describe('sum', () => {
        it('with a string should return undefind', () =>{
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });
        it('with positive numbers', () =>{
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });

        it('with negavite numbers', () =>{
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });

        it('with floating numbers', () =>{
            expect(mathEnforcer.sum(15.14, 3.25)).to.be.closeTo(18.39, 0.01);
        });
    });
});