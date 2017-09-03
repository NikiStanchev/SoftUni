let expect = require('chai').expect;
let Sumator = require('./sumator');


describe('Sorted List Unit Tests', function () {
    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });

    describe('Test initial state', function () {
        it('add exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });
    });

    describe('Test add', () =>{
        it('with one int', () =>{
            myList.add(5);
            expect(myList.toString()).to.equal('5', 'List did not add correctly!');
        });
        it('with many integers', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(myList.toString()).to.equal('5, 4, 3', 'List did not add correctly!');
        });

        it('with string', () =>{
            myList.add('string');
            expect(myList.toString()).to.equal('string', 'List did not add correctly!');
        });

        it('with object', () =>{
            let obj = {
                name:'Pesho',
                age: 22
            };
            myList.add(obj);
            expect(myList.toString()).to.equal('[object Object]', 'List did not add correctly!');
        });
    });

    describe('Test sumNums', () =>{
        it('with one int', () =>{
            myList.add(5);
            let sum = myList.sumNums();
            expect(sum).to.equal(5, 'List did not sum correctly!');
        });
        it('with many integers', () => {
            myList.add(5);
            myList.add(4);
            myList.add('pesho');
            myList.add(3);
            myList.add('gosho');
            let sum = myList.sumNums();
            expect(sum).to.equal(12, 'List did not sum correctly!');
        });
        it('with no int', () =>{
            let sum = myList.sumNums();
            expect(sum).to.equal(0, 'List did not sum correctly!');
        });
    });

    describe('Test removeByFilter', () =>{
        it('with many integers and one remove', () =>{
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.removeByFilter((a) => a == 5);
            let sum = myList.sumNums();
            expect(sum).to.equal(13, 'List did not sum correctly!');
        });

    });

    describe('Test toString', () =>{
        it('with many elements', () =>{
            myList.add(5);
            myList.add(6);
            myList.add(7);
            let myString = myList.toString();
            expect(myString).to.equal('5, 6, 7', 'List did not sum correctly!');
        });

        it('with no elements', () =>{
            let myString = myList.toString();
            expect(myString).to.equal('(empty)', 'List did not sum correctly!');
        });
    });
});