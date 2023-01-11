//map method
//it takes input callback function with parameter number,index same as forEach
//it return an array
numbers=[1,5,8,77];
const square=(number)=>{return number*number;}

const newArray=numbers.map(square);
console.log(newArray);

///we can also use anonymus function

const cube=numbers.map(function(number){return number*number*number;})
console.log(cube);

console.log(newArray==cube);

//real life examples
const users=[
    {name:"vinay",age:22},
    {name:"raj",age:25},
    {name:"ajay",age:22},
    {name:"sunny",age:25},
]
const firstName=users.map(function({name}){
    return name;
})
console.log(firstName);