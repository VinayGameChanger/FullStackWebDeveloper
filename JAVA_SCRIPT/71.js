//methods

//methods are function inside objects

// const person={
//     name:"vinay",
//     age:22,
//     about:function(){
//         console.log("person name is",this.name,"and person age is",this.age);
//     }
// }
// person.about();
//this is object in our case it is person

//part2

function personInfo(){
    console.log(`person name is ${this.name} and age is ${this.age}`);
}

const person1={
    name:"vinay",
    age:22,
    about:personInfo
}
const person2={
    name:"sunny",
    age:27,
    about:personInfo
}
const person3={
    name:"ajay",
    age:28,
    about:personInfo
}
person1.about()
person2.about()
person3.about()