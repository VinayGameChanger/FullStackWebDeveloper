const obj1={
    key1:"value1",
    key2:"value2"
}
//one way to create object
const obj2=Object.create(obj1);
//storing obj1 in proto of obj2 as reference
//[[Prototype]] or __proto__
obj2.key3="value3";
console.log(obj2);
// console.log(obj2.__proto__);//to print proto which is obj1

console.log(obj2.key1);
