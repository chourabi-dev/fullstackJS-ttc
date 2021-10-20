const express = require('express');
const { auth } = require('./my-modules/auth');
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');

var cors = require('cors') 
 
app.use(cors())


// middleware , 
app.use(function(req,res,next){
    console.log(new Date().getTime());


    const url = req.url;

    if (url === '/api/signin') {
        next();
    } else {
        const authorization = req.headers.authorization;

        if (authorization != null) {
            

            jwt.verify(authorization, 'secret-chaine', function(err, decoded) {
                console.log(decoded) // bar

                if (decoded != null) {
                    next();
                } else {
                    res.send({success: false, message:'session expired'})
                }

            });


           
        }else{
            res.send({success: false, message:'User need to be authenticated'})
        }
    
    }


     
    
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api => list employees

app.get('/employees',(req,res)=>{
    // simulation DB
    const employees = [
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        { fullname:"chouabi taher", email:'tchourabi@gmail.com' },
        
    ];

    res.send(employees);


})


// add employee
app.post('/employees/add',(req,res)=>{
    let requestBody;

    let stream = [];

    req.on('data',(data)=>{
        stream.push(data);
    }).on('end',()=>{

        let final = Buffer.concat(stream).toString(); 

        res.send(JSON.parse(final));


    })
})






app.post('/api/signin',(req,res)=>{
 auth(req,res);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})