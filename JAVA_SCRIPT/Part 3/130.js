//synchrous programming vs asynchrous programming

//synchrous programming

//line by line execution


// console.log("script start");

// for(let i=0;i<10000;i++){
//     console.log("in the loop");
// }

// console.log("script end");
console.log("script start");

const id= setTimeout(()=>{
    console.log("Inside setTimeout");
},1000)
console.log("settimeout id is",id);
for(let i=0;i<5000;i++){
    console.log("in the loop");
}
clearTimeout(id);
console.log("script end");
