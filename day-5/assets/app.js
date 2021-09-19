console.log("js is ready from app.js file");

/** Variables */
/*
var x,y,z;

x = 5;

y = "qqsqsqssqs" ;

z = x /  y ;

console.log(z);

console.log( typeof "hello world" ); // String
console.log( typeof 55 ); // number
console.log( typeof 5.5 ); // number 

console.log( typeof NaN ); // number

console.log( typeof false ); // boolean
console.log( typeof [1,2,3,4] ); // object
console.log( typeof { key:"value" , taher:"chourabi" } ); // object
console.log( typeof new Date() ); // object
console.log( typeof function(){} ); // function
console.log( typeof  null ); // object 


var aglobal  = "hello";
var bglobal  = "world";
 
 
 
const pi = 3.14;
false
const  pi = 18;

let a = 15;*/


/****************************************** function ******************************************** */

/*
function somme(){
    return (a+b);
}

let r = somme();

*/
/*
var somme = function(){
    return (a+b);
}
let r = somme();

// boucle
var somme = ()=>{
    return (a+b);
}

let r = somme();

console.log(r);*/

let a  = document.getElementById("xvalue"); 
let b = document.getElementById("yvalue"); 
var spanElement =  document.getElementById("res");


var somme = function(x,y){
    return(x+y);
}

 
var calculate = function (){
    console.log("Calculatiing...");
    const valueInputX = parseFloat(a.value);
    const valueInputY = parseFloat(b.value);
     


    spanElement.innerHTML =  somme(valueInputX,valueInputY);
}

// select span id = res
/*var spanElement =  document.getElementById("cocacola");


spanElement.innerHTML = r;*/
