let expect = require('chai').expect;
let createList = require('./list-add-swap-shift-left-right');


describe('List Unit Tests', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe("Add Test", function() {
        it("Add empty element", function() {
            list.add();
            expect(list.toString()).to.be.equal('');
        });
        it("Add element", function() {
            list.add(5);
            expect(list.toString()).to.be.equal('5');
        });
        it("Add many elements", function() {
            list.add(5);
            list.add(6);
            expect(list.toString()).to.be.equal('5, 6');
        });
        it("Add object", function() {
            let obj = {v:1};
            list.add(obj);
            expect(list.toString()).to.be.equal('[object Object]');
        });
    });

    describe("Shift Left Test", function() {
        it("shift first element", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('2, 3, 4, 1');
        });
        it("shift left with one element", function() {
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('1');
        });
    });

    describe("Shift Right Test", function() {
        it("shift last element", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.shiftRight();
            expect(list.toString()).to.be.equal('4, 1, 2, 3');
        });
        it("shift right with one element", function() {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equal('1');
        });
    });

    describe("Swap Test", function() {
        it("first index negativ", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(-1, 3);
            expect(result).to.be.false;
        });
        it("second index negativ", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(1, -3);
            expect(result).to.be.false;
        });
        it("first index bigger then arr length", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(5, 3);
            expect(result).to.be.false;
        });
        it("second index bigger then arr length", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(2, 33);
            expect(result).to.be.false;
        });
        it("first index bigger then the second but correct", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(2, 1);
            expect(list.toString()).to.be.equal('1, 3, 2, 4');
        });
        it("second index bigger then the first but correct", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(1, 2);
            expect(list.toString()).to.be.equal('1, 3, 2, 4');
        });
        it('index string return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap('pesho', 2);
            expect(result).to.be.false;
        });
        it('index string return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            let result = list.swap(1, 'pesho');
            expect(list.toString()).to.be.equal('1, 2, 3');
        });
        it("first index == length", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(4, 2);
            expect(result).to.be.false;
        });
        it("second index == length", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            let result = list.swap(2, 4);
            expect(result).to.be.false;
        });
        it("first index == second index", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(1, 1);
            expect(list.toString()).to.be.equal('1, 2, 3, 4');
        });
        it("zero modifie", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(1, 0);
            expect(list.toString()).to.be.equal('2, 1, 3, 4');
        });
        it("last element modifie", function() {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.swap(2, 3);
            expect(list.toString()).to.be.equal('1, 2, 4, 3');
        });
    });
});