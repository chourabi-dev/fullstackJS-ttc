/*var cars = [];  // array 

 insertion 

cars.push('BMW');
cars.push('VW');
cars.push("Volvo");
cars.push("Dacia");



console.log(cars);*/

/* DELETE last element

cars
(3) ['BMW', 'VW', 'Volvo']
cars.pop()
'Volvo'
cars
(2) ['BMW', 'VW']*/


/* DELETE FIRST
cars.pop()
'Volvo'
cars.shift()
'BMW'
cars
['VW']
*/



/** DELETE BY INDEX
 *  ['BMW', 'VW', 'Volvo', 'Dacia']
    var souArray = cars.splice(1,2)
    undefined
    souArray
    (2) ['VW', 'Volvo']
    cars
    (2) ['BMW', 'Dacia']

 * 
 */

/** SORT
 * 
 *  cars.sort()
    (4) ['BMW', 'Dacia', 'VW', 'Volvo']
    cars.reverse()
    (4) ['Volvo', 'VW', 'Dacia', 'BMW']

 */

//var notes = [15,19,16,13,17,12,1,5,9,3,16];

/**
 * notes.sort()
(11) [1, 12, 13, 15, 16, 16, 17, 19, 3, 5, 9]0: 11: 122: 133: 154: 165: 166: 177: 198: 39: 510: 9length: 11[[Prototype]]: Array(0)
notes.sort( (a,b)=> a - blur )
(11) [1, 12, 13, 15, 16, 16, 17, 19, 3, 5, 9]
notes.sort( (a,b)=> a - b )
(11) [1, 3, 5, 9, 12, 13, 15, 16, 16, 17, 19]
notes.sort( (a,b)=> { return (a - b)} )
(11) [1, 3, 5, 9, 12, 13, 15, 16, 16, 17, 19]
 */

/*
var notes = [
    { matiere: "math" , note : 19 },
    { matiere: "SC" , note : 5 },
    { matiere: "POO" , note : 18 },
    { matiere: "JAVA1" , note : 6 },
    
]*/
 
/*
var transactions = [
    { id: "hgqhsq-16" , amount: 180, date : "09/19/2021" },
    { id: "hgqhsq-17" , amount: 50, date : "09/10/2021" },
    { id: "hgqhsq-18" , amount: 19, date : "09/16/2021" },
    { id: "hgqhsq-19" , amount: 60, date : "09/3/2021" },
    
];


transactions.sort( (a,b) => new Date(a.date).getTime() - new Date(b.date).getTime() )*/