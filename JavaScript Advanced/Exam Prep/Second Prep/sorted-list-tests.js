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

    describe('Test remove', () => {
        it('remove first', () =>{
            myList.add(5);
            myList.add(4);
            myList.add(3);
            myList.remove(0);
            expect(myList.list.join(', ')).to.equal('4, 5', 'List did not add correctly!');
        });
        it('remove last', () =>{
            myList.add(5);
            myList.add(4);
            myList.add(3);
            myList.remove(2);
            expect(myList.list.join(', ')).to.equal('3, 4', 'List did not add correctly!');
        });
        it('remove negativ index', () =>{
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('remove to big index', () =>{
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(() => myList.remove(11)).throw(Error, 'Index was outside the bounds of the collection.');
        });
    });

    describe('Test get', () =>{
        it('With empty list', () =>{
            expect(() => myList.get()).throw(Error, 'Collection is empty.')
        });
        it('With index out of range', () =>{
            myList.add(2);
            expect(() => myList.get(3)).throw(Error, 'Index was outside the bounds of the collection.');
        });

        it('With one element', () =>{
            myList.add(2);
            expect(myList.get(0)).to.equal(2, 'List did not get correctly');
        });
    });

    describe('Test size', () =>{
        it('with no elements', () =>{
            let size = myList.size;
            expect(size).to.equal(0, 'List did not add correctly!');
        });
        it('with elements', () =>{
            myList.add(1);
            myList.add(12);
            myList.add(13);
            let size = myList.size;
            expect(size).to.equal(3, 'List did not add correctly!');
        });
    });
});