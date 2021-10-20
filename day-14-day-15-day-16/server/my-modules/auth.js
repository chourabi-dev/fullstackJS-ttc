var jwt = require('jsonwebtoken');
var sha1 = require('sha1');

var mongoConnectURL = 'mongodb://localhost:27017';


exports.auth = function(req,res){ 

 

            // step 1
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL,function(err,mongoServer){
        if (err) {
            throw err;
        } 
        var db = mongoServer.db('heros');

        // step 2 : data came from the user
        let strem = [];
        req.on('data',(data)=>{
            strem.push(data);
        }).on('end',()=>{
            let txt = Buffer.concat(strem).toString();
            let objet = JSON.parse(txt);

            // step 3 : insert user in database
            // collection users X

            db.collection('users').findOne({ email:objet.email, password: sha1(objet.password) }).then((result)=>{
                
                if (result) {
                    let token  = null;

                    // generate a new token
                    token = jwt.sign({ user: objet.email }, 'secret-chaine');
        
        
                    res.send({success:true, key:token});

                }else{
                    res.send({success: false, message:"wrong email or password"}) 
                }
            }).catch((err)=>{
                res.send({success: false, message:"something went wrong."}) 
            })
    

        })})

       

        
 
}


exports.createUserWithEmailAndPassword = function (req,res){
    
    // step 1
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL,function(err,mongoServer){
        if (err) {
            throw err;
        } 
        var db = mongoServer.db('heros');

        // step 2 : data came from the user
        let strem = [];
        req.on('data',(data)=>{
            strem.push(data);
        }).on('end',()=>{
            let txt = Buffer.concat(strem).toString();
            let objet = JSON.parse(txt);

            // step 3 : insert user in database
            // collection users X

            db.collection('users').findOne({ email:objet.email }).then((result)=>{
                if (result) {
                   res.send({success: false, message:"this email is already in use"}) 
                }else{
                    db.collection('users').insertOne({
                        email: objet.email,
                        password: sha1(objet.password) // we never save a plain text password 
                    }).then((result)=>{
                        res.send({success: true }) 
                    }).catch((err)=>{
                        res.send({success: false, message:"something went wrong"}) 
                    })
                }
            })
    

        })

       

        
    })
}