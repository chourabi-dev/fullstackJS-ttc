const express = require('express')
const app = express()
const port = 8080

var mongoConnectURL = 'mongodb://localhost:27017';
var jwt = require('jsonwebtoken');
const { createUserWithEmailAndPassword, auth } = require('./my-modules/auth');

var cors = require('cors');
const { createProduct, getProductsList, deleteProduct, editProduct } = require('./my-modules/products');
 
 
app.use(cors())

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



app.post('/api/signup',(req,res)=>{
    createUserWithEmailAndPassword(req,res);
})


app.post('/api/signin',(req,res)=>{
    auth(req,res);
})


app.post('/api/product/add',(req,res)=>{
    createProduct(req,res);
})


app.get('/api/product/list',(req,res)=>{
     getProductsList(req,res);
})



app.post('/api/product/delete',(req,res)=>{
    deleteProduct(req,res);
})

app.post('/api/product/edit',(req,res)=>{
    editProduct(req,res);
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})