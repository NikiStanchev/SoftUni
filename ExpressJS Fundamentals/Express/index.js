const express = require('express')
const app = express()
const bodyPnarser = require('body-parser')
const port = 1337


// app.all('/', (req, res, next)=>{
//     console.log('Midleware execution');
//     next();
// }, (rew, res)=>{
//     res.send('ADD HANDLER');
// });


// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send('Welcome to Express!');
// })

// app.get(/.*fly$/, (req, res)=>{
//     res.send('Everything thats end with fly');
// });

// app.get('/users/:userId(\\d+)', (req, res)=>{
//     let paramObj = req.params;
//     res.send(paramObj);
// });

// app.post('/', (req, res)=>{
//     res.send('POST request on the default page');
// });

// app.put('/', (req, res)=>{
//     res.send('PUT request on the default page');
// });

// app.route('/')
//     .get((req, res)=>{
//         res.send('GET request');
//     })
//     .post((req, res)=>{
//         res.send('POST request');
//     })
//     .put((req, res)=>{
//         res.send('PUT request');
//     })
//     .delete((req, res)=>{
//         res.send('DELETE request');
//     })
//     .all((req, res)=>{
//         res.send('All request');
//     })

// app.use('/user/:userId' ,(req, res, next)=>{
//     let userId = req.params.userId
//     let userExists = true
//     if(!userExists){
//         res.redirect('/login')
//     } else{
//         next()
//     }
// })

app.listen(port, ()=> console.log(`Express is running on port ${port}`));