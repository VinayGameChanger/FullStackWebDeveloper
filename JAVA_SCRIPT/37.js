//difference between dot and bracket notation
let key="Email"
const person={
    name:"vinay",
    age:27,
    hobbies:["sleeping","manga"],
    "higher Education":"12th Fail"
};
console.log(person);
console.log(person["higher Education"]);//we can only use bracket notation here to acess the data


//we want to add email but key we have to take it from the variable

//attempt 1

// person.key="vinay@gmail.com"
// console.log(person);//not desired output

//attempt 2

// person["key"]="vinay@gmail.com";
// console.log(person);//again same output

//attempt 3
person[key]="vinay@gmail.com";//do not add ""
console.log(person);//yipppeeee suceess
