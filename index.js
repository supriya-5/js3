// not defined - any variable which we try to access but not declared will throw us a reference error: variable not defined.
// console.log(my age);

//undefined- if a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the error as undefined.
// let myName;
// console.log(myName);

//null - its a default value assigned by a user to the variable as long as the variable has not been assigned its original/uodated value.

let amIadult = null;
console.log(amIadult)//null

amIadult = true;
console.log(amIadult)//true

//global scope and local/block scope 

let fname = "supi";
const lname = "priya"
var age = "5"

console.log(fname, lname, age);
{
    console.log(fname, lname, age);
}
console.log(fname, lname, age);

// any variable declare outside the block {} is caleed global scope.
// inside the {} is local/block scope

{
    let fname = "supi";
     const lname = "priya"
      var age = "5" 
    console.log(fname, lname, age);
}

console.log(fname);
console.log(lname);
console.log(age);

//console.log(game);
// const game = "cricket";

// let game1= "tennis";

// console.log(game2);
// var game2;
// game2= "badminton";
// console.log(game2);


//hoisting in functions

add(2,3)

function add(a,b){
    let result = a+b;
    console.log(result);
}