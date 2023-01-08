//function expression
//we assign function to a variable


//function declaration
// function singHappyBirthday(){
//     console.log("Happy Birthday to You...");
//     }
//function expression
const singHappyBirthday=function(){console.log("Happy Birthday to You...");}
singHappyBirthday();

//function declaration
// function addition(a,b){
//     return (a+b);
// }

//function expression
const addition=function(a,b){
    return a+b;
}
const returnedValue=addition(4,9);
console.log(returnedValue);

//function declaration
// function oddEven(a){
//     return a%2===0;
// }

//function expression
const oddEven=function(a){
    return a%2===0;
}
console.log(oddEven(5));
console.log(oddEven(8));

//function declaration

// function firstCharacter(a){
//     return a[0];
// }

//funcation expression

const firstCharacter=function(a){
    return a[0];
}
console.log(firstCharacter("vinay"));

//function decleration
// function search(myArray,element){
//     for(let i=0;i<myArray.length;i++){
//         if(myArray[i]===element){
//             return console.log(i);
//         }
//     }
//     return console.log("Not Found");
// }

const search=function(myArray,element){
    for(let key of myArray){
        if(key===element){
            return console.log(myArray.indexOf(key)); 
        }
} 
return console.log("Not Found");
}
search([1,5,7,11],5);
search([1,5,7,11],88);