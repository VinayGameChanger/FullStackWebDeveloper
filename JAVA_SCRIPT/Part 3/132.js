// understand callbacks

// function myFunc(callbacks){
//     console.log("function is doing some task 1");
//     callbacks();
// }

// myFunc(()=>{
//     console.log("function is doing some task 2");
// })

// function getTwoNumbersAndAdd(a,b,callbacks){
// if(typeof a=="number" && typeof b=="number"){
//     callbacks(a,b);
// }    
// else{
//     console.log("Please Input Correct Data Type");
// }
// }
//first method
// function add(a,b){
//     console.log(a+b);
// }
// getTwoNumbersAndAdd(4,5,add)

//second method
// getTwoNumbersAndAdd(4,5,(a,b)=>{
//     console.log(a+b);
// })



