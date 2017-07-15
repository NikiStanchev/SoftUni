let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>
`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('Shared Object UnitTests', () =>{
    describe('Initial value tests', () =>{
        it('test name initial value', () =>{
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value', () =>{
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('Change name tests', () =>{
        it('With empty string name should be null', () =>{
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it('With not empty string name should not be null', () =>{
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.equal('Pesho');
        });

        describe('Name input tests', () =>{
            it('With empty string name should be null', () =>{
                sharedObject.changeName('Gosho');
                sharedObject.changeName('');
                expect($('#name').val()).to.be.equal('Gosho');
            });
        });
    });
    describe('Change income tests', () =>{
        it('With string should be null', () =>{
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it('With floating number', () =>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('With negative number', () =>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('With zero', () =>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe('Income input tests',() =>{

            it('With string should be null', () =>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                expect($('#income').val()).to.be.equal('5');
            });
            it('With positive numbers', () =>{
                sharedObject.changeIncome(5);
                expect($('#income').val()).to.be.equal('5');
            });
            it('With floating numbers', () =>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(5.5);
                expect($('#income').val()).to.be.equal('5');
            });
            it('With negative numbers', () =>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-4);
                expect($('#income').val()).to.be.equal('5');
            });
            it('With zero', () =>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                expect($('#income').val()).to.be.equal('5');
            });
        });

    });

    describe('Update name test', ()=>{
       it('with an empty string should not change property', () =>{
           sharedObject.changeName('Viktor');
           let nameEl = $('#name');
           nameEl.val();
           sharedObject.updateName();
           expect(sharedObject.name).to.be.equal('Viktor');
       });
        it('with string should change property', () =>{
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });

    describe('Update income tests', ()=>{
        it('with a string should not change income property', ()=>{
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
    });
});