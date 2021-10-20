const {  ObjectID } = require('mongodb');



var mongoConnectURL = 'mongodb://localhost:27017';

exports.addNewFruit = function(req,res){
    // tester integration mongodb
    
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

        // step 3 : insert data in the database collection

        db.collection('fruits').insertOne(objet).then((result)=>{
           if( result.insertedId){
            res.send({ success:true, message:"fruit inserted successfully" })
           }

        }).catch((err)=>{
            res.send({ success:false, message:"something went wrong !!" })
        })

    })

       

        
    })
}


 

exports.addNewFruitCollection = function(req,res){
    // tester integration mongodb
    
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

        // step 3 : insert data in the database collection

        db.collection('fruits').insertMany(objet).then((result)=>{
            res.send({ success:true, message: result.insertedCount+ "fruits inserted successfully" })

        }).catch((err)=>{
            res.send({ success:false, message:"something went wrong !!" })
        })

    })

       

        
    })
}




exports.deleteFruit = function(req,res){
    // tester integration mongodb
    
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

        // step 3 : delete the fruit

        db.collection('fruits').deleteOne( { _id : ObjectID(objet.id) } ).then((result)=>{
            
            if (result.deletedCount) {
                res.send({ success:true, message: result.deletedCount+" fruit deleted successfully" })
            }else{
                //

                res.send({ success:true, message: "no data where deleted"})
            }
            

        }).catch((err)=>{
            res.send({ success:false, message:"something went wrong !!" })
        })

    })

       

        
    })
}




exports.deleteManyFruits = function(req,res){
    // tester integration mongodb
    
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

        // step 3 : delete the fruit

        db.collection('fruits').deleteMany( objet  ).then((result)=>{
            
            if (result.deletedCount) {
                res.send({ success:true, message: result.deletedCount+" fruit deleted successfully" })
            }else{
                //

                res.send({ success:true, message: "no data where deleted"})
            }
            

        }).catch((err)=>{
            res.send({ success:false, message:"something went wrong !!" })
        })

    })

       

        
    })
}





exports.updateFruit = function(req,res){
    // tester integration mongodb
    
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

        // step 3 : delete the fruit

        db.collection('fruits').updateMany( { price : objet.oldPrice },{ $set: { price: objet.newPrice }  } ).then((result)=>{
            
            if (result.modifiedCount) {
                res.send({ success:true, message: result.modifiedCount+" fruit modified successfully" })
            }else{
                //

                res.send({ success:true, message: "no data where modified"})
            }
            

        }).catch((err)=>{
            res.send({ success:false, message:"something went wrong !!" })
        })

    })

       

        
    })
}
