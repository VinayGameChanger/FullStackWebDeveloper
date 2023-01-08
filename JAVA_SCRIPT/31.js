//use const for creating array


//reference data type store only addresses 0x11 while items are stored in heap memory["apple","mango"]

const fruits=["apple","mango"];
fruits.push("banana");//we are not changing addresses during push new items thats why const can be used
console.log(fruits);
