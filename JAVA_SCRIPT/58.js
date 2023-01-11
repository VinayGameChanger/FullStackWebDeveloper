//filter method

// it also take input a callback function and return an array unlike forEach and like map
//it only return true value

numbers=[1,55,8,7,88];

const isEven=numbers.filter((number)=>{return number%2===0;}) 
console.log(isEven);