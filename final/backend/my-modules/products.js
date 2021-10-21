var mongoConnectURL = 'mongodb://localhost:27017';
const { ObjectID } = require('mongodb');



exports.createProduct = function (req, res) {



    // tester integration mongodb

    // step 1
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL, function (err, mongoServer) {
        if (err) {
            throw err;
        }
        var db = mongoServer.db('stockapp');

        // step 2 : data came from the user
        let strem = [];
        req.on('data', (data) => {
            strem.push(data);
        }).on('end', () => {
            let txt = Buffer.concat(strem).toString();
            let objet = JSON.parse(txt);

            // step 3 : insert data in the database collection

            db.collection('products').insertOne(objet).then((result) => {
                if (result.insertedId) {
                    res.send({ success: true, message: "product inserted successfully" })
                }

            }).catch((err) => {
                res.send({ success: false, message: "something went wrong !!" })
            })

        })




    })
}


exports.getProductsList = function (req, res) {

    // tester integration mongodb
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL, function (err, mongoServer) {
        if (err) {
            throw err;
        }

        var db = mongoServer.db('stockapp');

        db.collection('products').find({}).sort({ title: -1 }).toArray().then((result) => {

            res.send(result);
        }).catch((err) => {
            console.log(err);
        })
    })

}


exports.deleteProduct = function (req, res) {

    // tester integration mongodb

    // step 1
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL, function (err, mongoServer) {
        if (err) {
            throw err;
        }
        var db = mongoServer.db('stockapp');

        // step 2 : data came from the user
        let strem = [];
        req.on('data', (data) => {
            strem.push(data);
        }).on('end', () => {
            let txt = Buffer.concat(strem).toString();
            let objet = JSON.parse(txt);

            // step 3 : delete the fruit

            db.collection('products').deleteOne({ _id: ObjectID(objet.id) }).then((result) => {

                if (result.deletedCount) {
                    res.send({ success: true, message: result.deletedCount + " fruit deleted successfully" })
                } else {
                    //

                    res.send({ success: true, message: "no data where deleted" })
                }


            }).catch((err) => {
                res.send({ success: false, message: "something went wrong !!" })
            })

        })




    })

}

exports.editProduct = function (req, res) {
    // tester integration mongodb

    // step 1
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect(mongoConnectURL, function (err, mongoServer) {
        if (err) {
            throw err;
        }
        var db = mongoServer.db('stockapp');

        // step 2 : data came from the user
        let strem = [];
        req.on('data', (data) => {
            strem.push(data);
        }).on('end', () => {
            let txt = Buffer.concat(strem).toString();
            let objet = JSON.parse(txt);

            // step 3 : delete the fruit

            db.collection('products').updateOne({ _id: ObjectID(objet.id) },

                {
                    $set:  
                    {
                        price: objet.price,
                        title: objet.title,
                        code: objet.code,
                        weight: objet.weight,
                        quantity: objet.quantity, 
                    } 
                }).then((result) => {

                    if (result.modifiedCount) {
                        res.send({ success: true, message: result.modifiedCount + " fruit modified successfully" })
                    } else { 
                        res.send({ success: true, message: "no data where modified" })
                    }


                }).catch((err) => {
                    res.send({ success: false, message: "something went wrong !!" })
                })

        })




    })
}