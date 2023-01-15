//clone in object

const obj1={
    key1:"value1",
    key2:"value2",
}

//clone using spread operator
const obj2={...obj1};
obj1.key3="value3";
console.log(obj1);
console.log(obj2);

//clone using object.assign
const obj3=Object.assign({},obj1);
obj1.key4="value4";

console.log(obj3);