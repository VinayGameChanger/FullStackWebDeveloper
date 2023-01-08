//functions declaration
//just like naukars

console.log("Happy Birthday to You...");

//how to create function 


//happy birthday function
function singHappyBirthday(){
console.log("Happy Birthday to You...");
}

//call a function
singHappyBirthday();

//function to add two numbers

function addition(a,b){
    return (a+b);
}
const returnedValue=addition(4,9);
console.log(returnedValue);
//dry=dont repeat yourself

//function to add three numbers
function additionOfThreeNumbers(a,b,c){
    console.log(a+b+c);
}
//here a,b,c are parameters and 1,1,1 are argument which we pass in the parameters
additionOfThreeNumbers(1,1,1);

//oddEven function
function oddEven(a){
    return a%2===0;
}
console.log(oddEven(5));
console.log(oddEven(8));

//function to extract firstcharacter from a string

function firstCharacter(a){
    return a[0];
}
console.log(firstCharacter("vinay"));

//function to find a search element in an array and return its index

function search(myArray,element){
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]===element){
            return console.log(i);
        }
    }
    return console.log("Not Found");
}
search([1,5,7,11],5);
search([1,5,7,11],88);

