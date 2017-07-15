let createCalculator = require('../summator').createCalculator;
let expect = require('chai').expect;


describe('Calculator', () =>{
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

   it('Should return an object', () =>{
      expect(typeof calc).to.equal('object');
   });

    it('It should have 0 value when created', () =>{
        expect(calc.get()).to.equal(0);
    });
    it('It should have 0 value when no inputvalue', () =>{
        calc.add();
        expect(calc.get()).to.be.NaN;
    });

    it('It should add', () =>{
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });

    it('It should subtract', () =>{
        calc.subtract(3);
        calc.subtract(5);
        expect(calc.get()).to.equal(-8);
    });

    it('It should work with fractions', () =>{
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001);
    });
    it('It should work with negative numbers', () =>{
        calc.add(-3);
        calc.subtract(-5);
        expect(calc.get()).to.equal(2);
    });
    it('It should not add NaNs', () =>{
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('It should not subtract NaNs', () =>{
        calc.subtract('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('It should add strings as numbers', () =>{
        calc.add('7');
        expect(calc.get()).to.equal(7);
    });
});