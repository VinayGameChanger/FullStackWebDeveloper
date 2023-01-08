//array destructuring

const myArray=["value1","value2","value3","value4"];

//old method
// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log("The value of myVar1 is",myVar1);
// console.log("The value of myVar2 is",myVar2);

//using Array Destructuring

let [myVar1,myVar2,...myNewArray]=myArray;
console.log("The value of myVar1 is",myVar1);
console.log("The value of myVar2 is",myVar2);
console.log("The value of myNewArray is",myNewArray);