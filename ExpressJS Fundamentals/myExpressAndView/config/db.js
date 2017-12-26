const mongoose = require('mongoose')
const path = 'mongodb://localhost:27017/myexpressandview'

mongoose.Promise = global.Promise

// module.exports = mongoose.createConnection(path,{
//     useMongoClient:true
// })

// module.exports = mongoose.connect(path,{
//     useMongoClient:true
// })

module.exports =(()=>{
    mongoose.connect(path, {
        useMongoClient:true
    })
    console.log('DB is on')
})()