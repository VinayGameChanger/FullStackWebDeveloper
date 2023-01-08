//parameter destructuring

//object
//react
const person ={
    name:"vinay",
    age:27,
    gender:"male"
}

// const printInfo=(obj)=>{
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.gender);
// }
// printInfo(person);

//destrucing the parameter
const printInfo=({name,age,gender})=>{
    console.log(name);
    console.log(age);
    console.log(gender);
    }
    printInfo(person);