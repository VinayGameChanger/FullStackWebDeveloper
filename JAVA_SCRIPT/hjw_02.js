console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

//function declaration
function myFunction(){console.log("this is my function");}

var firstName="vinay";
var lastName="sharma";
var fullName=firstName+" "+lastName;
console.log(fullName);
//hoisting before even execution variable are stored in memory