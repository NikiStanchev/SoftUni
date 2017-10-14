const mongoose = require('mongoose');
let connectionStr = 'mongodb://localhost:27017/unidb';
let ObjectId = mongoose.Schema.ObjectId;
mongoose.Promise = global.Promise;


mongoose.connect(connectionStr, (err)=>{
    if(err){
        console.log(err);
        return;
    }

    let professorSchema = new mongoose.Schema({
        name:{type:String, required:true}
    });
    let studentSchema = new mongoose.Schema({
        firstName:{type:'String', required:true},
        lastName:{type:'String', required:true},
        age:{type:Number},
        facultyNumber:{type:String, unique:true}
        //keyId:{type:ObjectId}
    });
    let coursesSchema = new mongoose.Schema({
        name:{type:String, required:true, index:true},
        isOpen:{type:Boolean, required:true},
        professorId:{type:ObjectId}
    })

    studentSchema.methods.getInfo = function(){
        return `Hello my name is ${firstName} ${lastName}`;
    }

    studentSchema.virtual('fullName').get(function(){
        return this.firstName + ' ' + this.lastName;
    });

    studentSchema.path('firstName').validate(function(){
        return this.firstName.length >= 2 && this.firstName.length <= 10; 
    }, 'First name must be between 2 and 10 symbols');

    let Professor = mongoose.model('Proffesor', professorSchema);
    let Student = mongoose.model('Student', studentSchema);
    let Course = mongoose.model('Course', coursesSchema);

    let firstStudent = new Student({
        firstName:'Pesho', 
        lastName:'Petrov',
        age:20,
        facultyNumber:'12345'
    });

    // let secondStudent = new Student({
    //     firstName:'Gosho', 
    //     lastName:'Georgiev',
    //     age:25,
    //     facultyNumber:'12346'
    // });

    // Callback
    // firstStudent.save((err, sInfo)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(sInfo);
    // });

    // secondStudent.save()
    //     .then((sInfo)=>{
    //         console.log(sInfo._id);
    //     })
    //     .catch(handleError);

    Student.findById('59e24cd15fa9a31d34446a95', (err, s)=>{
        if(err){
            console.log(err);
            return;
        }
        s.firstName = 'Kiro';
        s.save()
        .then((newStudent)=>{
            console.log(newStudent);
        }).catch(handleError);
    })

    Student
        .find({})
        .exec()
        .then((students)=>{
            for(let s of students){
                console.log(s.fullName);
            }
        }).catch(handleError);
});






function handleError(err){
    if(err){
        console.log(err);
    }
}