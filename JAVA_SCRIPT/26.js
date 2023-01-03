//introduction to array
//reference data type
//array is a ordered collection of items it is also an object

let fruits=["apple","mango","grapes"];
let numbers=[1,5,141,55]
//array indexing

console.log(fruits);
console.log(fruits[0]);
console.log(numbers);

//we can store any data type in array
let mixed=[[1,2,4],"hello",555,{key1:"value1"}]
console.log(mixed);

//replace the items in an array
fruits[0]="banana";
console.log(fruits);

//arrays are mutable its item can be changed 

console.log(typeof fruits);//array is an objects

//to check if an object is a array
console.log(Array.isArray(fruits));


let object={};
console.log(Array.isArray(object));//false aas expected