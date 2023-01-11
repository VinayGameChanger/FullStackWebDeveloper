//how to iterate object

const person={
    name:"vinay",
    age:27,
    hobbies:["sleeping","manga"],
    "higher Education":"12th Fail"
};


//method 1

// for in loop
// for(let key in person){
//     console.log(key);
// }
// for(let key in person){
//     console.log(key,":",person[key]);
// }

//method2

//object.key

console.log(Object.keys(person));
console.log(Array.isArray(Object.keys(person)));
//now we get an array we can apply for of loop for array
for(let key of Object.keys(person)){
    console.log(person[key]);
}