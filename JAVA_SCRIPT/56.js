//important array method

//forEach(it doesnot give a new array)
//map(important)(it give a new array unlike forEach)
//filter
//reduce(important)

//old method
const numbers=[1,4,8,7,88];
// function multiplyBy2(number,index){
//     console.log(`index is ${index} and number is ${number*2}`);
// }
// for(let i=0;i<numbers.length;i++){
//     multiplyBy2(numbers[i],i);
// }

//using forEach in place of for loop
// numbers.forEach(multiplyBy2);

//we can also write function directly in argument of forEach() using anonynmous function
// numbers.forEach(function(number,index){console.log(`index is ${index} and number is ${number*2}`);})


//2nd example
// numbers.forEach(function(number){console.log(number*3);})

//to print username of each user 
const users=[
    {name:"vinay",age:22},
    {name:"raj",age:25},
    {name:"ajay",age:23},
]
//forEach method
users.forEach(function({name}){console.log(name);});

//for of method
for(let user of users){
    console.log(user.name);
}