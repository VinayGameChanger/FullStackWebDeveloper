//block scope vs function scope


//let and const are block scope
let a=1;
{
    
{
    let a=1;
    let firstName="vinay";
    // console.log(firstName);
}
console.log(a);
}
// console.log(firstName);error because let is block scope
{
    const firstName="ajay";
    console.log(firstName);

}

//var is a function scope

{
    var lastName="Sharma";
}
console.log(lastName);//var is function scope therefore no errror