let isSymmetric = require('../symmetry').isSymmetric;
let expect = require('chai').expect;

describe('Chek symmetry', () => {
   describe('General tests', () => {
       it('should be a function', () =>{
           expect(typeof isSymmetric).to.equal('function');
       })
   });

    describe('Value tests', () => {
        it('It should return true for [1,2,3,3,2,1]', () =>{
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it('It should return true for [1,2,3,2,1]', () =>{
            expect(isSymmetric([1,2,3,2,1])).to.be.true;
        });
        it('It should return false for [1,2,3,4,2,1]', () =>{
            expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
        });
        it('It should return true for [1]', () =>{
            expect(isSymmetric([1])).to.be.true;
        });
        it('It should return true for []', () =>{
            expect(isSymmetric([])).to.be.true;
        });
        it('It should return false for [1,2,-1]', () =>{
            expect(isSymmetric([1,2,-1])).to.be.false;
        });
        it('It should return true for ["pesho","gosho", "pesho"]', () =>{
            expect(isSymmetric(["pesho","gosho", "pesho"])).to.be.true;
        });
        it('It should return true for [5,"hi",{a:5},new Date(),{a:5},"hi",5]', () =>{
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
        });
        it('It should return false for [5,"hi",{a:5},new Date(),{a:5},5]', () =>{
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},5])).to.be.false;
        });
        it('It should return false for 1,2', () =>{
            expect(isSymmetric(1,2)).to.be.false;
        });
    });
});