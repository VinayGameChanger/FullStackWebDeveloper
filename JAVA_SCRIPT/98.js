//closures
//closure 30%-40%
//analyse 70-80$
//real life examples 100%

//function can return function

// function outerFn(){
//     const innerFn= function(){console.log("hello");}
//     return innerFn;
// }
// const ans=outerFn();
// ans();

function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}
const ans=printFullName("vinay","sharma")
ans();
