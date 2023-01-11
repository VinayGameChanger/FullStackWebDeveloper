//objects are reference datatype 
//are are good but not sufficient for real life problem
//objects store key value pairs
//objects dont have index

//how to create objects

const person={
    name:"vinay",
    age:27,
    hobbies:["sleeping","manga"]
};
console.log(person);
console.log(typeof person);

// how to access data from objects

//dot notation
console.log("dot notation to access data");
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

//bracket notation
console.log("bracket notation to access data");
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);


//how to add key value pair in objects
person.gender="male";
person["education"]="10th Fail";
console.log(person);

