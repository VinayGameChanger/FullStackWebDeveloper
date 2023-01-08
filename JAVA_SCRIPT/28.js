//primitive vs reference data type

//primitive data type(stored in stack)
let num1=6;
let num2=num1;
console.log(`the value of num1 is ${num1}`);
console.log(`the value of num2 is ${num2}`);
num1++;
console.log("After increasing num1 by 1");
console.log(`the value of num1 is ${num1}`);
console.log(`the value of num2 is ${num2}`);

//reference data type(only pointer is stored in stack) //pointer used to store address
let array1=["item1","item2"];
let array2=array1;
console.log("array1 is ",array1);
console.log("array2 is ",array2);
array1.push("item3")
console.log("After pushing item3 in array1");
console.log("array1 is ",array1);
console.log("array2 is ",array2);