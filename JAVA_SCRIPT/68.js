//maps(like objects)
//maps is an iterables

//store data in orderly fashion

//store key value pair(like objects)
//duplicate keys are not allowed like objects

//difference between maps and objects

//object can use strings and symbol as keys
//while map can use anything as keys eg array,number etc


//revise objects

//make objects using objects literals
const person={
    name:"vinay",
    age:27,
    1:"one"
}
console.log(person);
for(let key in person){
console.log(typeof key);}

// how to Map using constructor

const detail = new Map();
detail.set("firstName","sunny")
detail.set("age",27)
detail.set(1,"one")
console.log(detail);

//how to access data from maps

console.log(detail.get(1));
console.log(detail.get("age"));