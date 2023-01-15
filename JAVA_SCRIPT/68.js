//maps(like objects)
//maps is an iterables we can apply for of

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
detail.set([1,2,3],["one","two"])
console.log(detail);

//how to access data from maps

// console.log(detail.get(1));
// console.log(detail.get("age"));
console.log(detail.keys());
for(let key of detail.keys()){console.log(key,typeof key);}

//for of loop
for(let key of detail){console.log(key);
    console.log(Array.isArray(key));}

//how to make Maps

const newMaps=new Map([["name","sunny"],["age",27]])
console.log(newMaps);

//how to put extra info in a object using map

const person1={name:"raj",age:7}
const moreInfo=new Map();
moreInfo.set(person1,{gender:"male",id:05});
console.log(moreInfo);
console.log(person1.name);
console.log(moreInfo.get(person1));