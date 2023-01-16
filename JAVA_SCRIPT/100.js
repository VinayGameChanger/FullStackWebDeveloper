// function power(p){
//     return function(n){
//         return console.log(n**p);
//     }
// }
// const cube = power(3);
// cube(2);

// using arrow function
const power=(p)=>(n)=>console.log(n**p); 
const ans = power(3);
ans(4);