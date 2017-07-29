let expect = require('chai').expect;
let SortedList = require('./sorted-list');


describe('Sorted List Unit Tests', function () {
    let myList;
    beforeEach(function () {
       myList = new SortedList();
    });

    describe('Test initial state', function () {
        it('add exists', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('remove exists', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('get exists', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('size exists', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('Test add', () =>{
        it('with one element', () =>{
           myList.add(5);
           expect(myList.list.join(', ')).to.equal('5', 'List did not add correctly!');
        });
        it('with many elements', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(myList.list.join(', ')).to.equal('3, 4, 5', 'List did not add correctly!');
        });
    });

    describe('Test remove', () =>{
        it('With empty list', () =>{
           expect(() => myList.remove()).throw(Error, 'Collection is empty.')
        });
        it('With negative index', () => {
            myList.add(3);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With index equal to list length', () => {
            myList.add(3);
            expect(() => myList.remove(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With index bigger than the list length', () => {
            myList.add(3);
            expect(() => myList.remove(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With correct index', () => {
           myList.add(3);
           myList.add(4);
           myList.add(5);
           myList.remove(1);
           expect(myList.list.join(', ')).to.equal('3, 5', 'List did not remove correctly!');
        });
    });

    describe('Test get', () => {
        it('With empty list', () =>{
            expect(() => myList.get()).throw(Error, 'Collection is empty.')
        });
        it('With negative index', () => {
            myList.add(3);
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With index equal to list length', () => {
            myList.add(3);
            expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With index bigger than the list length', () => {
            myList.add(3);
            expect(() => myList.get(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('With correct index', () => {
            myList.add(3);
            myList.add(4);
            myList.add(5);
            let element = myList.get(1);
            expect(element).to.equal(4, 'List did not get correctly');
        });
    });

    describe('Test size', ()=>{
        it('With empty list', () => {
            expect(myList.size).to.equal(0, 'List was not empty');
        });
        it('With not-empty list', () => {
            myList.add(3);
            myList.add(4);
            myList.add(5);
            expect(myList.size).to.equal(3 , 'Size dont work correctly');
        });
    });
});