let expect = require('chai').expect;
let makeList = require('./list-add-left-right-clear');



describe('List addLeft / addRight Unit Tests', function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });


    describe('Test addLeft', () =>{
        it('with one element', () =>{
            myList.addLeft(5);
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = [5]', 'List did not add correctly!');
        });

        it('with many elements', () =>{
            myList.addLeft("beer");
            myList.addLeft(3.14);
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = [3.14, beer]', 'List did not add correctly!');
        });

        it('with no elements', () =>{
            myList.addLeft();
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = []', 'List did not add correctly!');
        });
    });

    describe('Test addRight', () =>{
        it('with one element', () =>{
            myList.addLeft(5);
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = [5]', 'List did not add correctly!');
        });

        it('with many elements', () =>{
            myList.addRight("beer");
            myList.addRight(3.14);
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = [beer, 3.14]', 'List did not add correctly!');
        });

        it('with no elements', () =>{
            myList.addRight();
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = []', 'List did not add correctly!');
        });
    });

    describe('Test clear', () =>{
        it('with one element', () =>{
            myList.addLeft(5);
            myList.clear();
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = []', 'List did not add correctly!');
        });

        it('with many elements', () =>{
            myList.addRight("beer");
            myList.addRight(3.14);
            myList.clear();
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = []', 'List did not add correctly!');
        });

        it('with no elements', () =>{
            myList.addRight();
            myList.clear();
            let result = `list = [${myList}]`;
            expect(result).to.equal('list = []', 'List did not add correctly!');
        });
    });
    describe('Test toString', () =>{
        it('with one element', () =>{
            myList.addLeft(5);
            let result = myList.toString();
            expect(result).to.equal('5', 'List did not add correctly!');
        });

        it('with many elements', () =>{
            myList.addRight("beer");
            myList.addRight(3.14);
            let result = myList.toString();
            expect(result).to.equal('beer, 3.14', 'List did not add correctly!');
        });

        it('with no elements', () =>{
            myList.addRight();
            let result = myList.toString();
            expect(result).to.equal('', 'List did not add correctly!');
        });
    });
});