const mongodb = require('mongodb');
let connectionStr = 'mongodb://localhost:27017/mytestdb'
mongodb.MongoClient.connect(connectionStr, (err, db)=>{
    if(err){
        console.log(err);
        return;
    }

    let people = db.collection('people');
    people.insert({name:"Stamat", gender:"male"}, (err,pInfo)=>{
        if(err){
            console.log(err);
            return;
        }
        people.find({name:"George"}).toArray((err, data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });
    });
});