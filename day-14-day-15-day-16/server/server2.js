const express = require('express')
const app = express()
const port = 8080
const url = require('url');
const { auth, createUserWithEmailAndPassword } = require('./my-modules/auth');
const { addNewFruit, addNewFruitCollection, deleteFruit, deleteManyFruits, updateFruit } = require('./my-modules/fruits');

var mongoConnectURL = 'mongodb://localhost:27017';
var jwt = require('jsonwebtoken');


// middleware , 
app.use(function(req,res,next){
    console.log(new Date().getTime());


    const url = req.url;

    if ( (url === '/api/signin') || (url === '/api/signup' ) ) {
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





app.get('/fruits/list', (req, res) => {

    // tester integration mongodb
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL,function(err,mongoServer){
        if (err) {
            throw err;
        }

        var db = mongoServer.db('heros');

        // SELECT sql WHERE key = value

        var params = url.parse(req.url,true).query;

        console.log(params);

        let filter = {  };

        if (params.price != null) {
            filter.price = Number(params.price);
        }

        db.collection('fruits').find( filter ).sort( { name: -1 } ) .toArray().then((result)=>{
             
            res.send(result);
        }).catch((err)=>{
            console.log(err);
        })
    })


 
})



// new API , ALLOWS me to add a new fruit => POST

app.post('/api/fruits',(req,res)=>{
    addNewFruit(req,res);
})


// new API , ALLOWS me to add a collection of fruits => POST

app.post('/api/collection/fruits/add',(req,res)=>{
    addNewFruitCollection(req,res);
})




// new API , ALLOWS me to delete an old fruit => POST

app.post('/fruits/delete',(req,res)=>{
    deleteFruit(req,res);
})



app.post('/fruits/delete/params',(req,res)=>{
    deleteManyFruits(req,res);
})




app.post('/fruits/update',(req,res)=>{
    updateFruit(req,res);
})



// auth


app.post('/api/signin',(req,res)=>{
    auth(req,res);
})

app.post('/api/signup',(req,res)=>{
    createUserWithEmailAndPassword(req,res);
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})