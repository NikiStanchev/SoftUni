function result() {

    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let base = super.toString().slice(0, -1);
            return `${base}, subject: ${this.subject})`;

        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            let base = super.toString().slice(0, -1);
            return `${base}, course: ${this.course})`;

        }
    }


    return {
        Person,
        Teacher,
        Student
    }
}


let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let student = new Student("Stamat",'stamcho@stamishteto.bg',666);
let person = new Person('Pesho', 'pesho@abv.bg');
let teacher = new Teacher('Gosho', 'gosho@abv.bg', 'Mathe');


console.log(student.toString());
console.log(person.toString());
console.log(teacher.toString());

function extendPrototype(baseClass) {
    baseClass.prototype.species = 'Human';
    baseClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

extendPrototype(Person);


console.log(person.toSpeciesString());
console.log(teacher.toSpeciesString());
