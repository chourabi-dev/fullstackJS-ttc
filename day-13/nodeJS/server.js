var http = require('http');
var url = require('url');
var fs = require('fs');

var myDateModule = require('./my-modules/dateModule');


console.log("server is listening on port 8080");

http.createServer(function(req,res){
    //res.end('hello world we are in '+myDateModule.getCurrentMonth()+'/'+ myDateModule.getCurrentYear());


    // url

    /*switch (url) {
        case '/year':
            res.end('year = '+myDateModule.getCurrentYear());
            
            break;

            case '/month':
                res.end('month = '+myDateModule.getCurrentMonth());
                
                break;
    
        default:
            res.end('welcome to our app');
            break;
    }*/



    // query params url
    // simuate database
    /*const employees = [
        { fullname:"chourabi", year: 2016 },
        { fullname:"chourabi 2", year: 2018 },
        { fullname:"taher", year: 2016 },
         
    ]

     
    const params = url.parse(req.url,true).query;

    console.log(params);

    if (params.year != null) {
        res.writeHead(200, {'content-type':'application/json'} )
        res.end(JSON.stringify(employees.filter(e => e.year == params.year) ));
    }else{
        res.writeHead(200, {'content-type':'application/json'} )
        res.end(JSON.stringify(employees));
    }*/



    // node server files
    const dateCallServer = new Date();
    const dateToSave = dateCallServer.toISOString();

    // create valeur inial 
    /**
     * fs.writeFile('log.txt',dateToSave,function(err){
        if (err) {
            console.log("oups");
        }

        console.log("saved");
    })
     */

    /*fs.appendFile('log.txt',dateToSave+'\n',function(err){
        if (err) {
            console.log("oups");
        }

        console.log("saved");
    })*/

    // read 
    /*fs.readFile('fruits.txt',function(err,data){
        const txt = (data.toString());

        const fruits = txt.split(',');

        console.log(fruits);

        res.end( JSON.stringify(fruits) )
    })*/


    const pathname = url.parse(req.url,true).pathname;

    switch (pathname) {
        case '/summer':
            fs.readFile('template/summer.html',function(err,data){
                 
                res.writeHead(200,{'content-type':'text/html'})
                res.end(  data )
            })
            break;

            case '/winter':
                fs.readFile('template/winter.html',function(err,data){
                     
                    res.writeHead(200,{'content-type':'text/html'})
                    res.end(  data )
                })
                break;
    
        default:

            fs.readFile('template/index.html',function(err,data){
                     
                res.writeHead(200,{'content-type':'text/html'})
                res.end(  data )
            })
            break;
    }


    
   
}).listen(8080);